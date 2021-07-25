import { ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  AbstractNgModelComponent,
  createTrackBy,
  CustomSectionInput,
  ResumeFormControls,
  ResumeFormProps,
} from '@ui/shared';
import { distinctUntilChanged } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'ui-custom-sections',
  templateUrl: './custom-sections.component.html',
  styleUrls: ['./custom-sections.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSectionsComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomSectionsComponent extends AbstractNgModelComponent implements OnInit {
  @Input()
  subtitle = '';

  @Input()
  customSections: CustomSectionInput[];

  title = 'Untitled Section';
  form: FormGroup;
  formArrayName = ResumeFormControls.CUSTOM_SECTIONS;
  PROPS = ResumeFormProps.CustomSections;
  SECTION_PROPS = ResumeFormProps.Section;

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

    this.customSections.forEach(this.insertSection.bind(this));

    // console.log(this.customSections, this.form);
  }

  private listenForm(): void {
    this.form.valueChanges
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe((value) => (this.value = value));
  }

  get formArray() {
    return this.form.get(this.formArrayName) as FormArray;
  }

  getItemsFormArray(index: number) {
    return this.formArray.at(index).get(this.PROPS.ITEMS) as FormArray;
  }

  sectionTrackByFn = createTrackBy();
  itemTrackByFn = createTrackBy();

  insertSection(data: CustomSectionInput, index: number, args?: any) {
    if (isNaN(index)) return;

    const defaultConfigs = {
      expanded: false,
    };

    this.formArray.insert(
      index,
      this.fb.group({
        [this.PROPS.TITLE]: [data?.title || this.title],
        [this.PROPS.ITEMS]: this.fb.array([]),
      })
    );

    if (data) {
      (data.items || []).forEach((item, i) => {
        const itemsFormArray = this.getItemsFormArray(index);

        itemsFormArray.insert(
          i,
          this.fb.group({ ...item, config: this.fb.group({ ...(args?.config ?? defaultConfigs) }) })
        );
      });
    }
  }

  editSection(editing: boolean, index: number) {
    // console.log(editing, index);

    if (isNaN(index)) return;

    // this.formArray.at(index);
  }

  saveSection(value: string, index: number) {
    if (isNaN(index)) return;

    const control = this.formArray.at(index).get(this.PROPS.TITLE);
    control.patchValue(value);
  }

  removeSection(index: number) {
    if (isNaN(index)) return;

    this.formArray.removeAt(index);
  }

  insertItem(sectionIndex: number, index: number, args: any) {
    if (isNaN(sectionIndex) || isNaN(index)) return;

    const itemsFormArray = this.getItemsFormArray(sectionIndex);
    const defaultConfigs = {
      expanded: false,
    };

    itemsFormArray.insert(
      index,
      this.fb.group({
        [this.SECTION_PROPS.TITLE]: [null],
        [this.SECTION_PROPS.DESCRIPTION]: [null],
        [this.SECTION_PROPS.CITY]: [null],
        [this.SECTION_PROPS.START_DATE]: [null],
        [this.SECTION_PROPS.END_DATE]: [null],
        config: this.fb.group({ ...(args?.config ?? defaultConfigs) }),
      })
    );
  }

  setStep(sectionIndex: number, index: number) {
    this.step = index;
    const itemsFormArray = this.getItemsFormArray(sectionIndex);

    itemsFormArray.controls.forEach((control, _index) =>
      control.get('config').patchValue({ expanded: index === _index })
    );
  }
}
