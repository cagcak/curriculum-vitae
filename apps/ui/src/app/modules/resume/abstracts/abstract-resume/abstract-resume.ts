import { Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateAndUpdateResumeInput, createTrackBy, ResumeFormControls, ResumeFormProps, Select } from '@ui/shared';
import { Observable } from 'rxjs';

export abstract class AbstractResume {
  @Select('resume')
  resume$: Observable<CreateAndUpdateResumeInput>;

  fb: FormBuilder;
  resumeForm: FormGroup;

  PROPS = ResumeFormProps;
  CONTROLS = ResumeFormControls;

  trackByFnPersonalDetail = createTrackBy<typeof ResumeFormProps>('PersonalDetail');
  trackByFnCourses = createTrackBy<typeof ResumeFormProps>('Courses');
  trackByFnEmploymentHistory = createTrackBy<typeof ResumeFormProps>('EmploymentHistory');

  constructor(protected injector: Injector) {
    this.fb = this.injector.get(FormBuilder);
  }

  protected abstract buildForm(): void;
}
