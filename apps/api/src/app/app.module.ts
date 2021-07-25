import { environment } from '@api/env';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
import { PersonModule } from './person/person.module';
import { ResumeModule } from './resume/resume.module';

const { db, schema } = environment;

@Module({
  imports: [
    MongooseModule.forRoot(`${db.host}/${db.name}`),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), schema.name),
      sortSchema: true,
      playground: true,
      debug: true,
      uploads: false,
    }),
    PersonModule,
    ResumeModule,
    CoreModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
