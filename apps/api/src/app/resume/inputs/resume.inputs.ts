import { CommonService } from '@api/core';
import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
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

@InputType()
export class ListResumesInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => PersonalDetailDto, { nullable: true })
  personalDetail?: PersonalDetailDto;

  @Field(() => ProfessionalSummaryDto, { nullable: true })
  professionalSummary?: ProfessionalSummaryDto;
}

@InputType()
export class CreateAndUpdateResumeInput {
  @Field(() => PersonalDetailDto, {
    nullable: true,
    defaultValue: {},
    description: new CommonService().generateFieldDescription(),
  })
  personalDetail?: PersonalDetailDto;

  @Field(() => ProfessionalSummaryDto, {
    nullable: true,
    defaultValue: {},
    description: new CommonService().generateFieldDescription(),
  })
  professionalSummary?: ProfessionalSummaryDto;

  @Field(() => [EmploymentHistoryDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  employmentHistories?: EmploymentHistoryDto[];

  @Field(() => [EducationDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  educations?: EducationDto[];

  @Field(() => [SkillDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  skills?: SkillDto[];

  @Field(() => [CourseDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  courses?: CourseDto[];

  @Field(() => [LanguageDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  languages?: LanguageDto[];

  @Field(() => [HobbieDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  hobbies?: HobbieDto[];

  @Field(() => [SocialLinkDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  socialLinks?: SocialLinkDto[];

  @Field(() => [ReferenceDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  references?: ReferenceDto[];

  @Field(() => [CustomSectionDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  customSections?: CustomSectionDto[];
}
