import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, forwardRef, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { environment } from '@ui/env';
import {
  AbstractNgModelComponent,
  Avatar,
  Config,
  Country,
  DialogAvatarEditorComponent,
  getEndpoint,
  getNestedControls,
  PersonalDetailInput,
  PersonCollectionMutation,
  PHONE_REGEX,
  ResumeFormProps,
  Select,
  UploadFileResponse,
} from '@ui/shared';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, distinctUntilChanged } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'ui-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersonalDetailsComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalDetailsComponent extends AbstractNgModelComponent implements OnInit {
  @Select('configs')
  configs$: Observable<Config>;

  @Input()
  resumeId: string;

  @Input()
  title = 'Personal Details';

  @Input()
  subtitle: string;

  @Input()
  personalDetail: PersonalDetailInput;

  form: FormGroup;
  PROPS = ResumeFormProps.PersonalDetail;
  AVATAR_PROPS = ResumeFormProps.Avatar;
  AVATAR_TRANSFORM_PROPS = ResumeFormProps.AvatarTransform;

  constructor(injector: Injector, private fb: FormBuilder, private dialog: MatDialog, private httpClient: HttpClient) {
    super(injector);
  }

  ngOnInit(): void {
    this.buildForm();
    this.listenForm();
    this.listenAvatarThumbControl();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      [this.PROPS.ADDRESS]: [this.personalDetail?.address],
      [this.PROPS.AVATAR]: this.fb.group(this.personalDetail?.avatar),
      [this.PROPS.CITY]: [this.personalDetail?.city],
      [this.PROPS.COUNTRY]: [this.personalDetail?.country],
      [this.PROPS.DATE_OF_BIRTH]: [this.personalDetail?.dateOfBirth],
      [this.PROPS.DRIVING_LICENSE]: [this.personalDetail?.drivingLicense],
      [this.PROPS.EMAIL]: [this.personalDetail?.email, [Validators.email]],
      [this.PROPS.FIRST_NAME]: [this.personalDetail?.firstName],
      [this.PROPS.LAST_NAME]: [this.personalDetail?.lastName, [Validators.required]],
      [this.PROPS.NATIONALITY]: [this.personalDetail?.nationality],
      [this.PROPS.PHONE]: [this.personalDetail?.phone, [Validators.pattern(PHONE_REGEX)]],
      [this.PROPS.PLACE_OF_BIRTH]: [this.personalDetail?.placeOfBirth],
      [this.PROPS.POSTAL_CODE]: [this.personalDetail?.postalCode],
      [this.PROPS.WANTED_JOB_TITLE]: [this.personalDetail?.wantedJobTitle],
    });
  }

  private listenForm(): void {
    this.form.valueChanges
      .pipe(distinctUntilChanged(), untilDestroyed(this))
      .subscribe((value) => (this.value = value));
  }

  private listenAvatarThumbControl() {
    this.avatarForm
      .get(this.AVATAR_PROPS.THUMB_URL)
      .valueChanges.pipe(untilDestroyed(this), delay(100))
      .subscribe(() => this.cdRef.markForCheck());
  }

  getCities([selectedCountry, countries]: [string, Country[]]) {
    return (countries || [])
      .map((country) => country.title === selectedCountry && country?.cities)
      .filter(Boolean)
      .find(Boolean);
  }

  get avatarForm() {
    return getNestedControls(this.form, this.PROPS.AVATAR);
  }

  openAvatarDialog(): void {
    const data = this.form.controls[this.PROPS.AVATAR].value;

    this.dialog
      .open<DialogAvatarEditorComponent, Avatar, File>(DialogAvatarEditorComponent, {
        panelClass: 'avatar-dialog',
        id: 'avatar-dialog',
        data,
      })
      .afterClosed()
      .subscribe((file: File) => {
        if (!file) return;

        const formData = new FormData();
        const operations = `{"operationName": "uploadFile",\n"variables": {\n"file": null,\n"id": "${this.resumeId}"\n},\n"query": "${PersonCollectionMutation.UPLOAD_FILE}"\n}`;

        formData.append('operations', operations);
        formData.append('map', '{ "0": ["variables.file"] }');
        formData.append('0', file);

        const url = getEndpoint(environment);

        this.httpClient
          .post(url, formData, {
            headers: {
              Accept: '*/*',
              cache: 'reload',
              mode: 'no-cors',
              'Cache-Control': 'no-cache, must-revalidate, no-store',
            },
          })
          .pipe(catchError((err) => throwError(err)))
          .subscribe(({ data: { uploadFile } }: UploadFileResponse) => {
            const { mediumUrl, originalUrl, thumbUrl } = uploadFile;

            this.avatarForm.get(this.AVATAR_PROPS.THUMB_URL).patchValue(thumbUrl);
            this.avatarForm.get(this.AVATAR_PROPS.MEDIUM_URL).patchValue(mediumUrl);
            this.avatarForm.get(this.AVATAR_PROPS.ORIGINAL_URL).patchValue(originalUrl);

            this.form.updateValueAndValidity();
          });
      });
  }
}
