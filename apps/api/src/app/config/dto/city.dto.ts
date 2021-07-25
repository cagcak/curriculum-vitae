import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('City')
@InputType('CityInput')
export class CityDto {
  @Field(() => String, { nullable: true })
  @Prop()
  title: string;
}
