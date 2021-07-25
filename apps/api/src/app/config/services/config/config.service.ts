import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateConfigInput, ListConfigsInput } from '../../inputs';
import { Config, ConfigDocument } from '../../models';

@Injectable()
export class ConfigService {
  constructor(@InjectModel(Config.name) private config: Model<ConfigDocument>) {}

  createConfig(payload: CreateConfigInput) {
    const instance = new this.config(payload);

    Object.keys(payload).forEach((dtoKey) => (instance[dtoKey] = payload[dtoKey]));

    return instance.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.config.findById(_id).exec();
  }

  getByName(name: string) {
    return this.config.findOne({ filter: name }).exec();
  }

  list(filters: ListConfigsInput) {
    return from(this.config.find({ ...filters }).exec())
      .pipe(map(([configs]) => configs))
      .toPromise();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.config.findByIdAndDelete(_id).exec();
  }

  bulkDelete(_ids: MongooseSchema.Types.ObjectId[]) {
    return this.config.deleteMany({ _id: { $in: _ids } }, { rawResult: true }).exec();
  }

  deleteAllDocuments() {
    return this.config.find().deleteMany();
  }
}
