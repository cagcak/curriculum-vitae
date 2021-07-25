import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Config, CreateAndUpdateResumeInput } from '../graphql';
import { ValueOf } from '../models';

export interface StateModel {
  resume: CreateAndUpdateResumeInput;
  resumes: CreateAndUpdateResumeInput[];
  configs: Config;
}

type Slices = ValueOf<StateModel>;

const DEFAULTS: StateModel = {
  resume: {},
  resumes: [],
  configs: {},
};

abstract class State<T = Slices> {
  abstract patch(key: string, value: T): void;
  abstract clear(key: string): void;
  abstract reset(): void;
  abstract snapshot(key: keyof StateModel): T;
}

let state: StateModel;
let subject: BehaviorSubject<StateModel>;

@Injectable({
  providedIn: 'root',
})
export class StateService<T = Slices> implements State {
  constructor() {
    state = JSON.parse(JSON.stringify(DEFAULTS));
    subject = new BehaviorSubject<StateModel>(state);
  }

  snapshot(key: keyof StateModel) {
    if (!state) return;

    return state[key as string];
  }

  patch(key: keyof StateModel, value: T) {
    this.errorHandler(key, value);

    state[key as string] = value;

    this.emitState();
  }

  clear(key: string) {
    this.errorHandler(key);

    state[key] = DEFAULTS[key];

    this.emitState();
  }

  reset() {
    state = DEFAULTS;

    this.emitState();
  }

  private emitState() {
    subject.next(state);
  }

  private errorHandler(key: string, value?: T) {
    if (!key || !value) throw new Error(`Missing key: ${key} or value: ${value}`);
    if (state[key] === undefined) throw new Error(`No such field or slice of state object: ${key}`);
  }
}

export function Select(key: keyof StateModel) {
  return (target: Object, propertyKey: string) => {
    let value: Slices;

    Object.defineProperty(target, propertyKey, {
      get: () => subject.pipe(map(() => state[key])),
      set: (newVal: Slices) => {
        if (!state[key]) {
          Object.defineProperty(target, 'errors', {
            value: `No such field or slice of state object ${key}`,
          });
        } else {
          value = newVal;
        }
      },
      enumerable: true,
      configurable: true,
    });
  };
}
