import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('Language')
@InputType('LanguageInput')
export class LanguageDto {
  @Field(() => String, { nullable: true })
  @Prop()
  language?: string;

  @Field(() => Int, { nullable: true })
  @Prop()
  level?: number;
}
