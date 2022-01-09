import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-section-partial',
  templateUrl: './section-partial.component.html',
  styleUrls: ['./section-partial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionPartialComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
