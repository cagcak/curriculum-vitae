import { ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AbstractNgModelComponent, ProfessionalSummaryInput, ResumeFormProps } from '@ui/shared';
import { distinctUntilChanged } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'ui-professional-summary',
  templateUrl: './professional-summary.component.html',
  styleUrls: ['./professional-summary.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProfessionalSummaryComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfessionalSummaryComponent extends AbstractNgModelComponent implements OnInit {
  @Input()
  title = 'Professional Summary';

  @Input()
  professionalSummary: ProfessionalSummaryInput;

  form: FormGroup;
  PROPS = ResumeFormProps.ProfessionalSummary;

  constructor(injector: Injector, private fb: FormBuilder) {
    super(injector);
  }

  ngOnInit(): void {
    this.buildForm();
    this.listenForm();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      [this.PROPS.TEXT]: [this.professionalSummary.text],
    });
  }

  private listenForm(): void {
    this.form.valueChanges
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe((value) => (this.value = value));
  }
}
