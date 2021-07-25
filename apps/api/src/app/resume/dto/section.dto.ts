import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('Section')
@InputType('SectionInput')
export class SectionDto {
  @Field(() => String, { nullable: true })
  @Prop()
  title?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  city?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  description?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  startDate?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  endDate?: string;
}
