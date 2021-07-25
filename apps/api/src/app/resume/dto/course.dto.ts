import { CommonService } from '@api/core';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('Course')
@InputType('CourseInput')
export class CourseDto {
  @Field(() => String, {
    nullable: true,
    defaultValue: '',
    description: new CommonService().generateFieldDescription(),
  })
  @Prop()
  course?: string;

  @Field(() => String, {
    nullable: true,
    defaultValue: '',
    description: new CommonService().generateFieldDescription(),
  })
  @Prop()
  institution?: string;

  @Field(() => String, {
    nullable: true,
    defaultValue: '',
    description: new CommonService().generateFieldDescription(),
  })
  @Prop()
  startDate?: string;

  @Field(() => String, {
    nullable: true,
    defaultValue: '',
    description: new CommonService().generateFieldDescription(),
  })
  @Prop()
  endDate?: string;
}
