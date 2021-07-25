import { ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  AbstractNgModelComponent,
  createTrackBy,
  ResumeFormControls,
  ResumeFormProps,
  SocialLinkInput,
} from '@ui/shared';
import { distinctUntilChanged } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'ui-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SocialLinksComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialLinksComponent extends AbstractNgModelComponent implements OnInit {
  @Input()
  title = 'Social Addresses';

  @Input()
  subtitle = 'Include your social links';

  @Input()
  socialLinks: SocialLinkInput[];

  form: FormGroup;
  formArrayName = ResumeFormControls.SOCIAL_LINKS;
  PROPS = ResumeFormProps.SocialLinks;

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

    this.socialLinks.forEach(this.insertItem.bind(this));

    // console.log(this.socialLinks, this.form);
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

  insertItem(data: SocialLinkInput, index: number, args: any) {
    if (isNaN(index)) return;

    const defaultConfigs = {
      expanded: false,
    };

    this.formArray.insert(
      index,
      this.fb.group({
        [this.PROPS.ADDRESS]: [data?.address || null],
        [this.PROPS.PLATFORM]: [data?.platform || null],
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
