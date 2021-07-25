import { ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AbstractNgModelComponent, createTrackBy, HobbieInput, ResumeFormControls, ResumeFormProps } from '@ui/shared';
import { distinctUntilChanged } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'ui-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HobbiesComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbiesComponent extends AbstractNgModelComponent implements OnInit {
  @Input()
  title = 'Hobbies';

  @Input()
  subtitle = 'Include your hobbies';

  @Input()
  hobbies: HobbieInput[];

  form: FormGroup;
  formArrayName = ResumeFormControls.HOBBIES;
  PROPS = ResumeFormProps.Hobbies;

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

    this.hobbies.forEach(this.insertItem.bind(this));

    // console.log(this.hobbies, this.form);
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

  insertItem(data: HobbieInput, index: number, args: any) {
    if (isNaN(index)) return;

    const defaultConfigs = {
      expanded: false,
    };

    this.formArray.insert(
      index,
      this.fb.group({
        [this.PROPS.TEXT]: [data?.text || null],
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
