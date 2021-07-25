import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { CountryDto, JobDto, LingoDto, NationalityDto } from '../dto';

@ObjectType()
@Schema({ collection: 'config_collection' })
export class Config {
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => [LingoDto])
  @Prop({
    type: MongooseSchema.Types.Array,
    ref: LingoDto.name,
  })
  lingos?: LingoDto[];

  @Field(() => [JobDto])
  @Prop({
    type: MongooseSchema.Types.Array,
    ref: JobDto.name,
  })
  jobs?: JobDto[];

  @Field(() => [CountryDto])
  @Prop({
    type: MongooseSchema.Types.Array,
    ref: CountryDto.name,
  })
  countries?: CountryDto[];

  @Field(() => [NationalityDto])
  @Prop({
    type: MongooseSchema.Types.Array,
    ref: NationalityDto.name,
  })
  nationalities?: NationalityDto[];
}

export type ConfigDocument = Config & Document;

export const ConfigSchema = SchemaFactory.createForClass(Config);
