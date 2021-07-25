import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('SocialLink')
@InputType('SocialLinkInput')
export class SocialLinkDto {
  @Field(() => String, { nullable: true })
  @Prop()
  platform?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  address?: string;
}
