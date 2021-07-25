import { CommonService } from '@api/core';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { CityDto } from './city.dto';

@ObjectType('Country')
@InputType('CountryInput')
export class CountryDto {
  @Field(() => String, { nullable: true })
  @Prop()
  title: string;

  @Field(() => [CityDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  cities?: CityDto[];
}
