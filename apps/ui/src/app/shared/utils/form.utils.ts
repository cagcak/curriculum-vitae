import { TrackByFunction } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class GeneralErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class PasswordFormErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export const getNestedControls = (form: FormGroup, formGroupControlName: string = '') => {
  return form?.controls[formGroupControlName] as FormGroup;
};

export const createTrackBy = <T = null>(key?: keyof T): TrackByFunction<T> => (index, item) =>
  key ? item?.[key] || item || index : item;
