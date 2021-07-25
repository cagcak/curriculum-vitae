import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('ProfessionalSummary')
@InputType('ProfessionalSummaryInput')
export class ProfessionalSummaryDto {
  @Field(() => String, { nullable: true })
  @Prop()
  text?: string;
}
