import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import {
  CreatePersonInput,
  ListPersonInput,
  UpdatePersonInput,
} from '../inputs';
import { Person, PersonDocument } from '../models';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name) private personModel: Model<PersonDocument>
  ) {}

  create(payload: CreatePersonInput) {
    const createdPerson = new this.personModel(payload);
    return createdPerson.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.personModel.findById(_id).exec();
  }

  list(filters: ListPersonInput) {
    return this.personModel.find({ ...filters }).exec();
  }

  update(payload: UpdatePersonInput) {
    return this.personModel
      .findByIdAndUpdate(payload._id, payload, { new: true })
      .exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.personModel.findByIdAndDelete(_id).exec();
  }

  bulkDelete(_ids: MongooseSchema.Types.ObjectId[]) {
    return this.personModel
      .deleteMany({ _id: { $in: _ids } }, { rawResult: true })
      .exec();
  }
}
