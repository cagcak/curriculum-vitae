import { FormBuilder } from '@angular/forms';
import { Common } from '../graphql';

export const filterGqlFieldId = <T>({ __typename, ...rest }: T & Common.FieldType) => rest;

export const arrayOfFormGroup = (array: any[]) => {
  const fb = new FormBuilder();
  return fb.array((array || []).map(filterGqlFieldId).map((group) => fb.group(group)));
};

export const arrayOfFormControls = (array: any[]) => {
  const fb = new FormBuilder();
  return fb.array((array || []).map(filterGqlFieldId));
};
