import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('Job')
@InputType('JobInput')
export class JobDto {
  @Field(() => String, { nullable: true })
  @Prop()
  title: string;
}
