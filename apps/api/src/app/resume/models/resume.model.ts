import { GraphqlMiddleware } from '@api/core';
import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import {
  CourseDto,
  CustomSectionDto,
  EducationDto,
  EmploymentHistoryDto,
  HobbieDto,
  LanguageDto,
  PersonalDetailDto,
  ProfessionalSummaryDto,
  ReferenceDto,
  SkillDto,
  SocialLinkDto,
} from '../dto';

@ObjectType()
@Schema({ collection: 'resume_collection' })
export class Resume {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => PersonalDetailDto, {
    middleware: [new GraphqlMiddleware().logger],
  })
  @Prop({ type: PersonalDetailDto, ref: PersonalDetailDto.name })
  personalDetail: PersonalDetailDto;

  @Field(() => ProfessionalSummaryDto, {
    nullable: true,
    middleware: [new GraphqlMiddleware().logger],
  })
  @Prop()
  professionalSummary?: ProfessionalSummaryDto;

  @Field(() => [EmploymentHistoryDto], {
    middleware: [new GraphqlMiddleware().logger],
  })
  @Prop({
    type: MongooseSchema.Types.Array,
    ref: EmploymentHistoryDto.name,
  })
  employmentHistories?: EmploymentHistoryDto[];

  @Field(() => [EducationDto], {
    nullable: true,
    middleware: [new GraphqlMiddleware().logger],
  })
  @Prop({ type: MongooseSchema.Types.Array, ref: EducationDto.name })
  educations?: MongooseSchema.Types.ObjectId[] | EducationDto[];

  @Field(() => [SkillDto], {
    nullable: true,
    middleware: [new GraphqlMiddleware().logger],
  })
  @Prop({ type: MongooseSchema.Types.Array, ref: SkillDto.name })
  skills?: MongooseSchema.Types.ObjectId[] | SkillDto[];

  @Field(() => [CourseDto], {
    nullable: true,
    middleware: [new GraphqlMiddleware().logger],
  })
  @Prop({ type: MongooseSchema.Types.Array, ref: CourseDto.name })
  courses?: MongooseSchema.Types.ObjectId[] | CourseDto[];

  @Field(() => [LanguageDto], {
    nullable: true,
    middleware: [new GraphqlMiddleware().logger],
  })
  @Prop({ type: MongooseSchema.Types.Array, ref: LanguageDto.name })
  languages?: MongooseSchema.Types.ObjectId[] | LanguageDto[];

  @Field(() => [HobbieDto], {
    nullable: true,
    middleware: [new GraphqlMiddleware().logger],
  })
  @Prop({ type: MongooseSchema.Types.Array, ref: HobbieDto.name })
  hobbies?: MongooseSchema.Types.ObjectId[] | HobbieDto[];

  @Field(() => [SocialLinkDto], {
    nullable: true,
    middleware: [new GraphqlMiddleware().logger],
  })
  @Prop({ type: MongooseSchema.Types.Array, ref: SocialLinkDto.name })
  socialLinks?: MongooseSchema.Types.ObjectId[] | SocialLinkDto[];

  @Field(() => [ReferenceDto], {
    nullable: true,
    middleware: [new GraphqlMiddleware().logger],
  })
  @Prop({ type: MongooseSchema.Types.Array, ref: ReferenceDto.name })
  references?: MongooseSchema.Types.ObjectId[] | ReferenceDto[];

  @Field(() => [CustomSectionDto], {
    nullable: true,
    middleware: [new GraphqlMiddleware().logger],
  })
  @Prop({ type: MongooseSchema.Types.Array, ref: CustomSectionDto.name })
  customSections?: MongooseSchema.Types.ObjectId[] | CustomSectionDto[];
}

export type ResumeDocument = Resume & Document;

export const ResumeSchema = SchemaFactory.createForClass(Resume);
