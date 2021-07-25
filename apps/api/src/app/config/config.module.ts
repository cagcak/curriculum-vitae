import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Config, ConfigSchema } from './models';
import { ConfigResolver } from './resolvers';
import { ConfigService } from './services';

@Module({
  imports: [MongooseModule.forFeature([{ name: Config.name, schema: ConfigSchema }])],
  providers: [ConfigService, ConfigResolver],
})
export class ConfigModule {}
