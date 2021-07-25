import { ChangeDetectorRef, Component, Injector, Input, OnInit, Type } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { GeneralErrorStateMatcher } from '../utils';

@Component({ template: '' })
export class AbstractNgModelComponent<T = any, U = T> implements OnInit, ControlValueAccessor {
  protected _value: T;

  matcher: ErrorStateMatcher;
  formControlName: NgControl;

  @Input()
  disabled: boolean;

  @Input()
  readonly: boolean;

  @Input()
  valueFn: (value: U, previousValue?: T) => T = (value) => (value as any) as T;

  @Input()
  valueLimitFn: (value: T, previousValue?: T) => any = (value) => false;

  @Input()
  set value(value: T) {
    value = this.valueFn((value as any) as U, this._value);

    if (this.valueLimitFn(value, this._value) !== false || this.readonly) return;

    this._value = value;
    this.notifyValueChange();
  }

  get value(): T {
    return this._value || this.defaultValue;
  }

  get defaultValue(): T {
    return this._value;
  }

  public get formControl(): AbstractControl {
    return this.formControlName?.control;
  }

  onChange: (value: T) => {};
  onTouched: () => {};

  protected cdRef: ChangeDetectorRef;

  constructor(public injector: Injector) {
    this.cdRef = injector.get<ChangeDetectorRef>(ChangeDetectorRef as Type<ChangeDetectorRef>);
  }

  ngOnInit(): void {
    this.formControlName = this.injector.get(NgControl, null);
    this.matcher = new GeneralErrorStateMatcher();
  }

  notifyValueChange(): void {
    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  writeValue(value: T): void {
    this._value = this.valueLimitFn(value, this._value) || value;
    setTimeout(() => this.cdRef.markForCheck(), 0);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdRef.markForCheck();
  }
}
