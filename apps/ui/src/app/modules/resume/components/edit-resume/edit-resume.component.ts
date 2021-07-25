import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injector,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CreateAndUpdateResumeInput, Layout, ResumeFormValue } from '@ui/shared';
import { AbstractResume } from '../../abstracts';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  content: CreateAndUpdateResumeInput[keyof CreateAndUpdateResumeInput];
}

@UntilDestroy()
@Component({
  selector: 'curriculum-vitae-edit-resume',
  templateUrl: './edit-resume.component.html',
  styleUrls: ['./edit-resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditResumeComponent extends AbstractResume implements OnInit, AfterContentInit {
  expansionPanelItems: Layout.PanelItem[] = [];
  // formObserver: Observable<CreateAndUpdateResumeInput>;

  tiles = [];

  constructor(protected injector: Injector, private cdRef: ChangeDetectorRef) {
    super(injector);
  }

  ngOnInit() {
    this.buildForm();
    // console.log(this);
  }

  ngAfterContentInit(): void {}

  protected buildForm(): void {
    this.resume$.pipe(untilDestroyed(this)).subscribe((resume) => {
      // console.log(resume);

      if (!resume || !Object.keys(resume).length) return;

      this.resumeForm = this.fb.group({
        [this.CONTROLS.PERSONAL_DETAIL]: [resume.personalDetail || null],
        [this.CONTROLS.PROFESSIONAL_SUMMARY]: [resume.professionalSummary || null],
        [this.CONTROLS.EMPLOYMENT_HISTORIES]: [resume.employmentHistories || null],
        [this.CONTROLS.EDUCATIONS]: [resume.educations || null],
        [this.CONTROLS.SKILLS]: [resume.skills || null],
        [this.CONTROLS.COURSES]: [resume.courses || null],
        [this.CONTROLS.LANGUAGES]: [resume.languages || null],
        [this.CONTROLS.REFERENCES]: [resume.references || null],
        [this.CONTROLS.SOCIAL_LINKS]: [resume.socialLinks || null],
        [this.CONTROLS.HOBBIES]: [resume.hobbies || null],
        [this.CONTROLS.CUSTOM_SECTIONS]: [resume.customSections || null],
      });

      this.listenForm();
      this.resumeForm.updateValueAndValidity({ emitEvent: true });
      this.cdRef.detectChanges();
    });
  }

  private listenForm() {
    this.resumeForm.valueChanges.pipe(untilDestroyed(this)).subscribe((value: ResumeFormValue) => this.setTiles(value));
  }

  private setTiles(value: CreateAndUpdateResumeInput) {
    const v = Object.entries(value)
      .map(([a, b]) => ({ content: b, rows: ((b as any).length || [a].length) * 2 }))
      .map((val) => ({ ...val, color: 'transparent', cols: 2 }));

    this.tiles = v;
  }
}
