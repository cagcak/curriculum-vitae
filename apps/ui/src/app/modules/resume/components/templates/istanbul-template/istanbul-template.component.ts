import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ResumeFormValue } from '@ui/shared';
import { ResumeTemplateAbstract } from '../../../abstracts';

@Component({
  selector: 'ui-istanbul-template',
  templateUrl: './istanbul-template.component.html',
  styleUrls: ['./istanbul-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class IstanbulTemplateComponent implements OnInit {
  resumeValue: ResumeFormValue;

  /** Template reference to the canvas element */
  // @ViewChild('canvasEl') canvasEl: ElementRef;

  /** Canvas 2d context */
  // private context: CanvasRenderingContext2D;

  // private get canvas() {
  //   return this.canvasEl.nativeElement as HTMLCanvasElement;
  // }

  get dps() {
    return {
      border: '1px red solid',
    };
  }

  constructor(protected resumeInjector: ResumeTemplateAbstract<ResumeFormValue>) {
    this.resumeValue = resumeInjector.resumeValue;
  }

  ngOnInit() {
    console.log(this);
  }

  // ngAfterViewInit() {
  // this.context = this.canvas.getContext('2d');

  // this.draw();
  // }

  // private draw() {
  //   this.context.font = '30px Arial';
  //   this.context.textBaseline = 'middle';
  //   this.context.textAlign = 'center';

  //   const x = this.canvas.width / 2;
  //   const y = this.canvas.height / 2;
  //   this.context.fillText('@realappie', x, y);
  // }
}
