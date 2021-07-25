import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';

@ObjectType('FileUpload')
@InputType('FileUploadInput')
export class FileUploadDto {
  @Field(() => Boolean, { nullable: true })
  success?: boolean;

  @Field(() => String)
  @Prop()
  mediumUrl: string;

  @Field(() => String)
  @Prop()
  originalUrl: string;

  @Field(() => String)
  @Prop()
  thumbUrl: string;
}
