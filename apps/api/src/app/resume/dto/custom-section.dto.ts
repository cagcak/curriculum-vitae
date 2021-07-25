import { GraphqlMiddleware } from '@api/core';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { SectionDto } from './section.dto';

@ObjectType('CustomSection')
@InputType('CustomSectionInput')
export class CustomSectionDto {
  @Field(() => String, { nullable: true })
  @Prop()
  title?: string;

  @Field(() => [SectionDto], {
    middleware: [new GraphqlMiddleware().logger],
  })
  @Prop({
    type: MongooseSchema.Types.Array,
    ref: SectionDto.name,
  })
  items?: SectionDto[];
}
