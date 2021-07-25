import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('Skill')
@InputType('SkillInput')
export class SkillDto {
  @Field(() => String, { nullable: true })
  @Prop()
  skill?: string;

  @Field(() => Int, { nullable: true })
  @Prop()
  level?: number;
}
