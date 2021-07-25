import { ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  AbstractNgModelComponent,
  createTrackBy,
  ReferenceInput,
  ResumeFormControls,
  ResumeFormProps,
} from '@ui/shared';
import { distinctUntilChanged } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'ui-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReferencesComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferencesComponent extends AbstractNgModelComponent implements OnInit {
  @Input()
  title = 'References';

  @Input()
  subtitle = 'Include your personal reference contact informations';

  @Input()
  references: ReferenceInput[];

  form: FormGroup;
  formArrayName = ResumeFormControls.REFERENCES;
  PROPS = ResumeFormProps.References;

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

    this.references.forEach(this.insertItem.bind(this));

    // console.log(this.references, this.form);
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

  insertItem(data: ReferenceInput, index: number, args: any) {
    if (isNaN(index)) return;

    const defaultConfigs = {
      expanded: false,
    };

    this.formArray.insert(
      index,
      this.fb.group({
        [this.PROPS.FULL_NAME]: [data?.fullName || null],
        [this.PROPS.TITLE]: [data?.title || null],
        [this.PROPS.COMPANY]: [data?.company || null],
        [this.PROPS.EMAIL]: [data?.email || null],
        [this.PROPS.DISPLAY_STATUS]: [data?.displayStatus || null],
        [this.PROPS.PHONE]: [data?.phone || null],
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
