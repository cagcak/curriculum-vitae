import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoHooksMiddleware } from './middlewares';
import { Resume } from './models';
import { FileResolver, ResumeResolver } from './resolvers';
import { ResumeService, UploadFileServie } from './services';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Resume.name,
        useFactory: () => new MongoHooksMiddleware().listen(),
      },
    ]),
  ],
  providers: [ResumeService, ResumeResolver, FileResolver, UploadFileServie],
})
export class ResumeModule {}
