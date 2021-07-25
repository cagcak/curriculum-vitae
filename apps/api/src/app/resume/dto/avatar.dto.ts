import { CommonService } from '@api/core';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('AvatarTransformRect')
@InputType('AvatarTransformRectInput')
class AvatarTransformRectDto {
  @Field(() => Number, {
    nullable: true,
    defaultValue: 0,
    description: 'vertical deviation of avatar',
  })
  @Prop()
  x?: number;

  @Field(() => Number, {
    nullable: true,
    defaultValue: 0,
    description: 'horizontal deviation of avatar',
  })
  @Prop()
  y?: number;

  @Field(() => Number, {
    nullable: true,
    defaultValue: 1,
    description: 'width of avatar',
  })
  @Prop()
  w?: number;

  @Field(() => Number, {
    nullable: true,
    defaultValue: 1,
    description: 'height of avatar',
  })
  @Prop()
  h?: number;
}

@ObjectType('AvatarTransform')
@InputType('AvatarTransformInput')
class AvatarTransformDto {
  @Field(() => AvatarTransformRectDto, {
    nullable: true,
    defaultValue: '',
    description: new CommonService().generateFieldDescription(),
  })
  @Prop({ type: AvatarTransformRectDto, ref: AvatarTransformRectDto.name })
  rect?: AvatarTransformRectDto;

  @Field(() => Number, {
    nullable: true,
    defaultValue: 1,
    description: new CommonService().generateFieldDescription(),
  })
  @Prop()
  zoom?: number;

  @Field(() => Number, {
    nullable: true,
    defaultValue: 0,
    description: new CommonService().generateFieldDescription(),
  })
  @Prop()
  angle?: number;
}

@ObjectType('Avatar')
@InputType('AvatarInput')
export class AvatarDto {
  @Field(() => AvatarTransformDto, {
    nullable: true,
    defaultValue: '',
    description: new CommonService().generateFieldDescription(),
  })
  @Prop({ type: AvatarTransformDto, ref: AvatarTransformDto.name })
  transform?: AvatarTransformDto;

  @Field(() => String, {
    nullable: true,
    defaultValue: '',
    description: new CommonService().generateFieldDescription(),
  })
  @Prop()
  thumbUrl?: string;

  @Field(() => String, {
    nullable: true,
    defaultValue: '',
    description: new CommonService().generateFieldDescription(),
  })
  @Prop()
  mediumUrl?: string;

  @Field(() => String, {
    nullable: true,
    defaultValue: '',
    description: new CommonService().generateFieldDescription(),
  })
  @Prop()
  originalUrl?: string;

  @Field(() => Boolean, {
    nullable: true,
    defaultValue: false,
    description: new CommonService().generateFieldDescription(),
  })
  @Prop()
  blank?: boolean;
}
