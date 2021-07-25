import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Resume } from '../../resume/models/resume.model';
import {
  CreatePersonInput,
  ListPersonInput,
  UpdatePersonInput,
} from '../inputs';
import { Person, PersonDocument } from '../models';
import { PersonService } from '../services';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private personService: PersonService) {}

  @Query(() => Person)
  async person(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.personService.getById(_id);
  }

  @Query(() => [Person])
  async persons(
    @Args('filters', { nullable: true }) filters?: ListPersonInput
  ) {
    return this.personService.list(filters);
  }

  @Mutation(() => Person)
  async createPerson(@Args('payload') payload: CreatePersonInput) {
    return this.personService.create(payload);
  }

  @Mutation(() => Person)
  async updatePerson(@Args('payload') payload: UpdatePersonInput) {
    return this.personService.update(payload);
  }

  @Mutation(() => Person)
  async deletePerson(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId
  ) {
    return this.personService.delete(_id);
  }

  @Mutation(() => Boolean, { nullable: true })
  async bulkDeletePersons(
    @Args('_ids', { type: () => [String] })
    _ids: MongooseSchema.Types.ObjectId[]
  ) {
    return this.personService.bulkDelete(_ids).then(Boolean);
  }

  @ResolveField()
  async resumes(
    @Parent() person: PersonDocument,
    @Args('populate') populate: boolean
  ) {
    if (populate)
      await person
        .populate({ path: 'resumes', model: Resume.name })
        .execPopulate();

    return person?.resumes;
  }
}
