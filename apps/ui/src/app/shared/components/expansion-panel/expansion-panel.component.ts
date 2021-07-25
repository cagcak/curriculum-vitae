import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Layout } from '../../models';
import { createTrackBy } from '../../utils';

@Component({
  selector: 'ui-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent implements OnInit {
  @Input()
  panels: Layout.Panel[] = [
    {
      title: 'Title 1',
      subtitle: 'Subtitle 1',
      icon: 'date_range',
      actions: [
        {
          label: 'update',
          action: (e) => console.log(this, e),
        },
      ],
    },
  ];

  step = 0;

  trackByFn = createTrackBy<Layout.Panel>('title');

  constructor() {}

  ngOnInit() {}
}
