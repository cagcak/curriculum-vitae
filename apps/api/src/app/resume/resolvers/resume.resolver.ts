import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { CreateAndUpdateResumeInput, ListResumesInput } from '../inputs';
import { Resume } from '../models';
import { ResumeService } from '../services';

@Resolver(() => Resume)
export class ResumeResolver {
  constructor(private resumeService: ResumeService) {}

  @Query(() => Resume)
  async resume(@Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId) {
    return this.resumeService.getById(_id);
  }

  @Query(() => [Resume])
  async resumes(@Args('filters', { nullable: true }) filters?: ListResumesInput) {
    return this.resumeService.list(filters);
  }

  @Mutation(() => Resume)
  async deleteResume(@Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId) {
    return this.resumeService.delete(_id);
  }

  @Mutation(() => Boolean, { nullable: true })
  async bulkDeleteResumes(
    @Args('_ids', { type: () => [String] })
    _ids: MongooseSchema.Types.ObjectId[]
  ) {
    return this.resumeService.bulkDelete(_ids).then(Boolean);
  }

  @Mutation(() => Boolean, { nullable: true })
  async deleteAllResumes() {
    return this.resumeService.deleteAllDocuments().then(Boolean);
  }

  @Mutation(() => Resume)
  async createResume(@Args('payload') payload: CreateAndUpdateResumeInput) {
    return this.resumeService.createResume(payload);
  }

  @Mutation(() => Resume, { description: 'Massive resume update operation' })
  async updateResume(
    @Args('_id', { type: () => String }) _id: string,
    @Args('payload') payload: CreateAndUpdateResumeInput
  ) {
    return this.resumeService.updateResume(_id, payload);
  }
}
