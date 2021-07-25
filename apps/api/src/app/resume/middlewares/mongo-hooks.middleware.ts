import { Injectable, Scope } from '@nestjs/common';
import { noop } from 'rxjs';
import { ResumeSchema } from '../models';

@Injectable({ scope: Scope.TRANSIENT })
export class MongoHooksMiddleware {
  private schema: typeof ResumeSchema;

  protected preInit: () => void = noop;
  protected preRemove: () => void = noop;
  protected preDeleteOne: () => void = noop;
  protected preUpdateOne: () => void = noop;
  protected preValidate: () => void = noop;
  protected preSave: () => void = noop;
  protected postInit: () => void = noop;
  protected postRemove: () => void = noop;
  protected postDeleteOne: () => void = noop;
  protected postUpdateOne: () => void = noop;
  protected postValidate: () => void = noop;
  protected postSave: () => void = noop;

  constructor() {
    const schema = ResumeSchema;

    schema.pre('init', this.preInit);
    schema.pre('remove', this.preRemove);
    schema.pre('deleteOne', this.preDeleteOne);
    schema.pre('updateOne', this.preUpdateOne);
    schema.pre('validate', this.preValidate);
    schema.pre('save', this.preSave);

    schema.post('init', this.postInit);
    schema.post('remove', this.postRemove);
    schema.post('deleteOne', this.postDeleteOne);
    schema.post('updateOne', this.postUpdateOne);
    schema.post('validate', this.postValidate);
    schema.post('save', this.postSave);

    this.schema = schema;
  }

  listen() {
    return this.schema;
  }
}
