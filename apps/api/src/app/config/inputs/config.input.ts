import { CommonService } from '@api/core';
import { Field, InputType } from '@nestjs/graphql';
import { CountryDto, JobDto, LingoDto, NationalityDto } from '../dto';

@InputType()
export class CreateConfigInput {
  @Field(() => [LingoDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  lingos?: LingoDto[];

  @Field(() => [JobDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  jobs?: JobDto[];

  @Field(() => [CountryDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  countries?: CountryDto[];

  @Field(() => [NationalityDto], {
    nullable: 'itemsAndList',
    defaultValue: [],
    description: new CommonService().generateFieldDescription(),
  })
  nationalities?: NationalityDto[];
}

@InputType()
export class ListConfigsInput {
  @Field(() => LingoDto, { nullable: true })
  lingos?: LingoDto;

  @Field(() => JobDto, { nullable: true })
  jobs?: JobDto;

  @Field(() => CountryDto, { nullable: true })
  countries?: CountryDto;

  @Field(() => NationalityDto, { nullable: true })
  nationalities?: NationalityDto;
}
