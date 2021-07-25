/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { MB } from '@api/core';
import { environment } from '@api/env';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';
import { graphqlUploadExpress } from 'graphql-upload';
import { join } from 'path';
import { AppModule } from './app/app.module';

// export let app: NestExpressApplication;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors();
  app.use(graphqlUploadExpress({ maxFileSize: 2 * MB, maxFiles: 10 }));
  app.useStaticAssets(join(__dirname, '..', 'public'));

  const { app: location } = environment;
  const port = process.env.PORT || location.port;

  await app.listen(port, () => {
    Logger.log(`Listening at ${location.host}:${port}/${globalPrefix}`);
  });
}

bootstrap();
