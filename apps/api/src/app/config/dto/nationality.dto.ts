import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('Nationality')
@InputType('NationalityInput')
export class NationalityDto {
  @Field(() => String, { nullable: true })
  @Prop()
  title: string;
}
