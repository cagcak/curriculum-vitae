import { GraphqlMiddleware } from '@api/core';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { AvatarDto } from './avatar.dto';

@ObjectType('PersonalDetail')
@InputType('PersonalDetailInput')
export class PersonalDetailDto {
  @Field(() => String, { nullable: true })
  @Prop()
  wantedJobTitle?: string;

  @Field(() => AvatarDto, { middleware: [new GraphqlMiddleware().logger] })
  @Prop({ type: AvatarDto, ref: AvatarDto.name })
  avatar?: AvatarDto;

  @Field(() => String, { nullable: true })
  @Prop()
  firstName?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  lastName?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  email?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  phone?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  country?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  city?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  address?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  postalCode?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  drivingLicense?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  nationality?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  placeOfBirth?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  dateOfBirth?: string;
}
