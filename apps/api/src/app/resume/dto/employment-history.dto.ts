import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('EmploymentHistory')
@InputType('EmploymentHistoryInput')
export class EmploymentHistoryDto {
  @Field(() => String, { nullable: true })
  @Prop()
  jobTitle?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  employer?: string;

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
