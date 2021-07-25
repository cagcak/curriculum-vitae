import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('Education')
@InputType('EducationInput')
export class EducationDto {
  @Field(() => String, { nullable: true })
  @Prop()
  school?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  degree?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  startDate?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  endDate?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  city?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  description?: string;
}
