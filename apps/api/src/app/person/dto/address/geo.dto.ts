import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('Geo')
@InputType('GeoInput')
export class GeoDto {
  @Field(() => String, { nullable: true })
  @Prop()
  lat?: string;

  @Field(() => String, { nullable: true })
  @Prop()
  lng?: string;
}
