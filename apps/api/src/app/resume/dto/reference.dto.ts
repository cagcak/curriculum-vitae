import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('Reference')
@InputType('ReferenceInput')
export class ReferenceDto {
  @Field(() => String, { nullable: true })
  @Prop()
  fullName?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  title?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  company?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  phone?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  email?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  displayStatus?: string;
}
