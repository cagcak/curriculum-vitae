import { ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  AbstractNgModelComponent,
  createTrackBy,
  EmploymentHistoryInput,
  ResumeFormControls,
  ResumeFormProps,
} from '@ui/shared';
import { distinctUntilChanged } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'ui-employment-history',
  templateUrl: './employment-history.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmploymentHistoryComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmploymentHistoryComponent extends AbstractNgModelComponent implements OnInit {
  // @ViewChild(MatAccordion) accordion: MatAccordion;

  @Input()
  title = 'Employment History';

  @Input()
  subtitle =
    'Include your last 10 years of relevant experience and dates in this section. List your most recent position first.';

  @Input()
  employmentHistories: EmploymentHistoryInput[];

  form: FormGroup;
  formArrayName = ResumeFormControls.EMPLOYMENT_HISTORIES;
  PROPS = ResumeFormProps.EmploymentHistory;

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

    this.employmentHistories.forEach(this.insertItem.bind(this));

    // console.log(this.employmentHistories, this.form);
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

  insertItem(data: EmploymentHistoryInput, index: number, args: any) {
    if (isNaN(index)) return;

    const defaultConfigs = {
      expanded: false,
    };

    this.formArray.insert(
      index,
      this.fb.group({
        [this.PROPS.CITY]: [data?.city || null],
        [this.PROPS.DESCRIPTION]: [data?.description || null],
        [this.PROPS.EMPLOYER]: [data?.employer || null],
        [this.PROPS.JOB_TITLE]: [data?.jobTitle || null],
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
