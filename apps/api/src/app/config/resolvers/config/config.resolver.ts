import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { CreateConfigInput, ListConfigsInput } from '../../inputs';
import { Config } from '../../models';
import { ConfigService } from '../../services';

@Resolver(() => Config)
export class ConfigResolver {
  constructor(private configService: ConfigService) {}

  @Query(() => Config)
  async config(@Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId) {
    return this.configService.getById(_id);
  }

  @Query(() => Config)
  async configs(@Args('filters', { nullable: true }) filters?: ListConfigsInput) {
    return this.configService.list(filters);
  }

  @Mutation(() => Config)
  async createConfig(@Args('payload') payload: CreateConfigInput) {
    return this.configService.createConfig(payload);
  }

  @Mutation(() => Config)
  async deleteConfig(@Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId) {
    return this.configService.delete(_id);
  }

  @Mutation(() => Boolean, { nullable: true })
  async bulkDeleteConfigs(
    @Args('_ids', { type: () => [String] })
    _ids: MongooseSchema.Types.ObjectId[]
  ) {
    return this.configService.bulkDelete(_ids).then(Boolean);
  }

  @Mutation(() => Boolean, { nullable: true })
  async deleteAllConfigs() {
    return this.configService.deleteAllDocuments().then(Boolean);
  }
}
