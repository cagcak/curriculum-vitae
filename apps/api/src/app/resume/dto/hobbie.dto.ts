import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('Hobbie')
@InputType('HobbieInput')
export class HobbieDto {
  @Field(() => String, { nullable: true })
  @Prop()
  text?: string;
}
