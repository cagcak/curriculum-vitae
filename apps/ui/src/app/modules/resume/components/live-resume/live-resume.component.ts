import { ChangeDetectionStrategy, Component, Injector, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { environment } from '@ui/env';
import { Layout, Picked, ResumeFormValue } from '@ui/shared';
import { ResumeTemplateAbstract } from '../../abstracts';
import { AnkaraTemplateComponent, IstanbulTemplateComponent } from '../templates';

@UntilDestroy()
@Component({
  selector: 'curriculum-vitae-live-resume',
  templateUrl: './live-resume.component.html',
  styleUrls: ['./live-resume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiveResumeComponent implements OnInit, OnChanges {
  @Input()
  resumeValue: ResumeFormValue;

  @Input()
  activeTemplate: Picked<Layout.Template, 'name'>;

  templateSelectiveControl = new FormControl();
  injector: Injector;

  TEMPLATES: Layout.ResumeTemplate = {
    ISTANBUL_TEMPLATE: {
      name: IstanbulTemplateComponent.name,
      component: IstanbulTemplateComponent,
    },
    ANKARA_TEMPLATE: {
      name: AnkaraTemplateComponent.name,
      component: AnkaraTemplateComponent,
    },
  };

  isToggleButtonActive = !environment.production;

  constructor(public _injector: Injector) {}

  ngOnInit(): void {
    this.injectContentValue();
    this.listenTemplateSelectiveControl();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.resumeValue) {
      this.injectContentValue();
    }
  }

  private injectContentValue() {
    this.injector = Injector.create({
      providers: [
        {
          provide: ResumeTemplateAbstract,
          useValue: { resumeValue: this.resumeValue } as ResumeTemplateAbstract<ResumeFormValue>,
        },
      ],
      parent: this._injector,
    });
  }

  private listenTemplateSelectiveControl() {
    if (!this.isToggleButtonActive) return;

    this.templateSelectiveControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((selectedTemplate: Picked<Layout.Template, 'name'>) => {
        this.activeTemplate = selectedTemplate;
      });
  }
}
