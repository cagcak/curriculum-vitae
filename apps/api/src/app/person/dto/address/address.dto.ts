import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { GeoDto } from './geo.dto';

@ObjectType('Address')
@InputType('AddressInput')
export class AddressDto {
  @Field(() => String, { nullable: true })
  @Prop()
  street?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  suite?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  city?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  zipcode?: string;

  @Field(() => GeoDto, { nullable: true })
  @Prop()
  geo?: GeoDto;
}
