import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('Lingo')
@InputType('LingoInput')
export class LingoDto {
  @Field(() => String, { nullable: true })
  @Prop()
  title: string;
}
