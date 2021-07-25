import { ImageVersion } from '@api/core';
import { environment } from '@api/env';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as FS from 'fs';
import { Model, Schema as MongooseSchema } from 'mongoose';
import * as path from 'path';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CreateAndUpdateResumeInput, ListResumesInput } from '../inputs';
import { Resume, ResumeDocument } from '../models';

@Injectable()
export class ResumeService {
  constructor(@InjectModel(Resume.name) private resume: Model<ResumeDocument>) {}

  createResume(payload: CreateAndUpdateResumeInput) {
    const instance = new this.resume(payload);

    Object.keys(payload).forEach((dtoKey) => (instance[dtoKey] = payload[dtoKey]));

    return instance.save();
  }

  updateResume(_id: string, payload: CreateAndUpdateResumeInput) {
    if (!payload || !Object.keys(payload).length) throw new Error(`No payload found: ${payload}`);

    return from(this.resume.findById(_id).exec())
      .pipe(
        map(() => {
          const publicAvatarDir = path.join(__dirname, '..', 'public', 'avatar', _id);

          let mappedPayload: CreateAndUpdateResumeInput;

          try {
            const files = FS.readdirSync(publicAvatarDir);

            const versionOf = (version: keyof typeof ImageVersion) => {
              const {
                app: { host, port },
              } = environment;

              return files
                .filter((file) => file.includes(ImageVersion[version]))
                .map((file) => `${host}:${port}/avatar/${_id}/${file}`)
                .find(Boolean);
            };

            const thumbUrl = versionOf('THUMB');
            const mediumUrl = versionOf('MEDIUM');
            const originalUrl = versionOf('ORIGINAL');

            mappedPayload = {
              ...payload,
              personalDetail: {
                ...payload.personalDetail,
                avatar: {
                  ...payload.personalDetail.avatar,
                  thumbUrl,
                  mediumUrl,
                  originalUrl,
                },
              },
            };
          } catch (err) {
            console.log(err, 'avatar directory does not exist');
          }

          if (mappedPayload) {
            this.createResume(mappedPayload);
          }

          return mappedPayload || payload;
        }),
        switchMap((mappedPayload) => {
          console.log(payload);

          return this.resume
            .findByIdAndUpdate(_id, mappedPayload, {
              new: true,
              useFindAndModify: false,
              multi: true,
            })
            .exec();
        })
      )
      .toPromise();
  }

  getById(_id: MongooseSchema.Types.ObjectId | string) {
    return this.resume.findById(_id).exec();
  }

  getLeanById(_id: MongooseSchema.Types.ObjectId | string) {
    return this.resume.find({ _id }).lean();
  }

  getDocumentObjectById(_id: MongooseSchema.Types.ObjectId | string) {
    return from(this.getById(_id))
      .pipe(map((doc) => doc.toObject()))
      .toPromise();
  }

  list(filters: ListResumesInput) {
    return this.resume.find({ ...filters }).exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.resume.findByIdAndDelete(_id).exec();
  }

  bulkDelete(_ids: MongooseSchema.Types.ObjectId[]) {
    return this.resume.deleteMany({ _id: { $in: _ids } }, { rawResult: true }).exec();
  }

  deleteAllDocuments() {
    return this.resume.find().deleteMany();
  }
}
