import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload';
import { FileUploadDto } from '../dto';
import { UploadFileServie } from '../services';

@Resolver()
export class FileResolver {
  constructor(private uploadFileServie: UploadFileServie) {}

  @Mutation(() => FileUploadDto)
  async uploadFile(
    @Args('id', { type: () => String }) id: string,
    @Args({ name: 'file', type: () => GraphQLUpload })
    fileUpload: FileUpload
  ) {
    return this.uploadFileServie.saveFile(id, fileUpload);
  }
}
