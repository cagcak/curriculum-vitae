import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { AddressDto } from '../dto';

@InputType()
export class CreatePersonInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  website?: string;

  @Field(() => AddressDto, { nullable: true })
  address?: AddressDto;
}

@InputType()
export class ListPersonInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  website?: string;

  @Field(() => AddressDto, { nullable: true })
  address?: AddressDto;
}

@InputType()
export class UpdatePersonInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  website?: string;

  @Field(() => AddressDto, { nullable: true })
  address?: AddressDto;
}
