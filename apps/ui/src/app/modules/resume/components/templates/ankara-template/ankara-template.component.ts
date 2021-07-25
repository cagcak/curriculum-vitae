import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ResumeFormValue } from '@ui/shared';
import { ResumeTemplateAbstract } from '../../../abstracts';

@Component({
  selector: 'ui-ankara-template',
  templateUrl: './ankara-template.component.html',
  styleUrls: ['./ankara-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnkaraTemplateComponent implements OnInit {
  resumeValue: ResumeFormValue;

  constructor(protected resumeInjector: ResumeTemplateAbstract<ResumeFormValue>) {
    this.resumeValue = resumeInjector.resumeValue;
  }

  ngOnInit() {
    console.log(this);
  }
}
