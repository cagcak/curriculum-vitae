import { ImageVersion } from '@api/core';
import { environment } from '@api/env';
import { Inject, Injectable } from '@nestjs/common';
import * as FS from 'fs';
import { FileUpload } from 'graphql-upload';
import { join } from 'path';
import { from, throwError } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import sharp, { Sharp } from 'sharp';
import { FileUploadDto } from '../dto';
import { CreateAndUpdateResumeInput } from '../inputs';
import { ResumeService } from './resume.service';

@Injectable()
export class UploadFileServie {
  constructor(@Inject('ResumeService') private resume: ResumeService) {}

  saveFile(id: string, fileUpload: FileUpload) {
    return new Promise((resolve, reject): Promise<FileUploadDto> | Sharp => {
      const stream = fileUpload.createReadStream();
      const localDir = join(__dirname, '..', 'public', 'avatar', id);
      // const uuid = Math.random().toString(26).slice(2);
      const filename = `${fileUpload.filename}`;

      if (FS.existsSync(localDir)) {
        FS.rmdirSync(localDir, { recursive: true });
      }

      FS.mkdirSync(localDir, { recursive: true });

      const versionalFilename = (bump: keyof typeof ImageVersion) => `${localDir}/${ImageVersion[bump]}_${filename}`;

      const pipeline = sharp();

      const thumbUrl = FS.createWriteStream(versionalFilename('THUMB'));
      const mediumUrl = FS.createWriteStream(versionalFilename('MEDIUM'));
      const originalUrl = FS.createWriteStream(versionalFilename('ORIGINAL'));

      pipeline.clone().resize(200, 200).pipe(thumbUrl);
      pipeline.clone().resize(64, 64).pipe(mediumUrl);
      pipeline.clone().pipe(originalUrl);

      return stream
        .pipe(pipeline)
        .on('finish', () => {
          const {
            app: { host, port },
          } = environment;
          const staticAssetHost = `${host}:${port}/avatar/${id}`;
          const thumbUrl = versionalFilename('THUMB').replace(localDir, staticAssetHost);
          const mediumUrl = versionalFilename('MEDIUM').replace(localDir, staticAssetHost);
          const originalUrl = versionalFilename('ORIGINAL').replace(localDir, staticAssetHost);
          const success = true;

          from(this.resume.getDocumentObjectById(id))
            .pipe(
              map((leanDocument) => {
                const { personalDetail, __v, id, _id, ...rest } = leanDocument;
                return {
                  ...rest,
                  personalDetail: {
                    ...personalDetail,
                    avatar: {
                      ...personalDetail.avatar,
                      thumbUrl,
                      mediumUrl,
                      originalUrl,
                      success,
                    },
                  },
                } as CreateAndUpdateResumeInput;
              }),
              switchMap((mappedDocument) => this.resume.updateResume(id, mappedDocument)),
              take(1)
            )
            .subscribe({
              next: () =>
                resolve({
                  thumbUrl,
                  mediumUrl,
                  originalUrl,
                  success,
                }),
              error: (e) => throwError(e),
            });
        })
        .on('error', (e) => {
          console.log('error', e);
          reject({
            success: false,
          });
        });
    });
  }
}
