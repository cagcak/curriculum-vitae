import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Resume } from '../../resume/models/resume.model';
import { AddressDto } from '../dto';

@ObjectType()
@Schema({ collection: 'person_collection' })
export class Person {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  @Prop()
  name?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  username?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  email?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  phone?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  website?: string;

  @Field(() => AddressDto, { nullable: true })
  @Prop()
  address?: AddressDto;

  @Field(() => [Resume])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Resume.name })
  resumes?: MongooseSchema.Types.ObjectId[] | Resume[];
}

export type PersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);
