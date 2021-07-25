import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { timer } from 'rxjs';

@UntilDestroy()
@Directive({
  selector: '[formControlError]',
})
export class FormControlErrorDirective implements AfterViewInit, OnDestroy, OnChanges {
  @Input()
  formControlError?: { [key: string]: string };

  @Input()
  isDirtyRequired = false;

  @Input()
  externalMessages?: { [prop: string]: string };

  /**
   * @description Bind errors immediately
   * @usecase File Inputs or the controls which set
   *          their changed status before any subscription
   */
  @Input()
  checkErrorsAfterInitialize = false;

  defaultErrorMessages = {
    required: 'This field is required',
    email: 'Invalid email address',
  };

  control: AbstractControl;

  constructor(private injector: Injector, private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const ngControl: NgControl = this.injector.get(NgControl, null);
    this.control = ngControl.control;

    timer(0).subscribe(() => {
      const originalFn = ngControl.control.updateValueAndValidity;
      const self = this;
      ngControl.control.updateValueAndValidity = function (opts?) {
        originalFn.apply(this, arguments);
        self.checkRequiredError();
        self.checkExternalMessages();
      };

      ngControl.control.statusChanges.pipe(untilDestroyed(this)).subscribe(() => {
        this.checkRequiredError();
        this.checkExternalMessages();
      });

      if (this.checkErrorsAfterInitialize && this.control.invalid && this.control.errors) {
        this.checkRequiredError();
        this.checkExternalMessages();
      }
    });
  }

  getErrorKeys() {
    return Object.keys(this.control.errors || {});
  }

  checkRequiredError() {
    const errorKeys = this.getErrorKeys();

    if (this.isDirtyRequired && !this.control.dirty) return [];

    if (errorKeys.length) {
      const config = { ...this.defaultErrorMessages, ...this.formControlError };
      if (config[errorKeys[0]]) {
        this.cdRef['context'].formControlErrorMessage = config[errorKeys[0]];
      }
    } else {
      this.cdRef['context'].formControlErrorMessage = '';
    }
    this.cdRef.markForCheck();
  }

  checkExternalMessages() {
    const errorKeys = this.getErrorKeys();

    if (errorKeys.length > 0) return;

    const error = Object.entries(this.externalMessages || {}).find(([_, value]) => !!value);

    if (error) {
      this.cdRef['context'].formControlErrorMessage = error[1];
    } else {
      this.cdRef['context'].formControlErrorMessage = '';
    }
    this.cdRef.markForCheck();
  }

  ngOnDestroy(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.externalMessages) return;

    const externalMessages = changes.externalMessages;

    if (
      !externalMessages.firstChange &&
      JSON.stringify(externalMessages.currentValue) !== JSON.stringify(externalMessages.previousValue)
    ) {
      this.checkExternalMessages();
    }
  }
}
