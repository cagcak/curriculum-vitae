import { ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  AbstractNgModelComponent,
  createTrackBy,
  EducationInput,
  ResumeFormControls,
  ResumeFormProps,
} from '@ui/shared';
import { distinctUntilChanged } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'ui-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EducationsComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationsComponent extends AbstractNgModelComponent implements OnInit {
  @Input()
  title = 'Educations';

  @Input()
  subtitle = 'Add your educational records';

  @Input()
  educations: EducationInput[];

  form: FormGroup;
  formArrayName = ResumeFormControls.EDUCATIONS;
  PROPS = ResumeFormProps.Educations;

  step = 0;

  constructor(injector: Injector, private fb: FormBuilder) {
    super(injector);
  }

  ngOnInit(): void {
    this.buildForm();
    this.listenForm();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      [this.formArrayName]: this.fb.array([]),
    });

    this.educations.forEach(this.insertItem.bind(this));

    // console.log(this.educations, this.form);
  }

  private listenForm(): void {
    this.form.valueChanges
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe((value) => (this.value = value));
  }

  get formArray() {
    return this.form.get(this.formArrayName) as FormArray;
  }

  trackByFn = createTrackBy();

  insertItem(data: EducationInput, index: number, args: any) {
    if (isNaN(index)) return;

    const defaultConfigs = {
      expanded: false,
    };

    this.formArray.insert(
      index,
      this.fb.group({
        [this.PROPS.CITY]: [data?.city || null],
        [this.PROPS.DESCRIPTION]: [data?.description || null],
        [this.PROPS.DEGREE]: [data?.degree || null],
        [this.PROPS.SCHOOL]: [data?.school || null],
        [this.PROPS.START_DATE]: [data?.startDate || null],
        [this.PROPS.END_DATE]: [data?.endDate || null],
        config: this.fb.group({ ...(args?.config ?? defaultConfigs) }),
      })
    );
  }

  setStep(index: number) {
    this.step = index;
    this.formArray.controls.forEach((control, _index) =>
      control.get('config').patchValue({ expanded: index === _index })
    );
  }
}
