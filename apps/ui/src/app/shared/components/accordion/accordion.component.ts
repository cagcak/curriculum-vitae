import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatAccordionTogglePosition } from '@angular/material/expansion';
import { Layout } from '../../models';
import { createTrackBy } from '../../utils';

@Component({
  selector: 'ui-accordion',
  templateUrl: './accordion.component.html',
  styles: [
    `
      .accordion-container .mat-expansion-panel-header-title,
      .accordion-container .mat-expansion-panel-header-description {
        flex-basis: 0;
      }

      .accordion-container .mat-expansion-panel-header-description {
        justify-content: space-between;
        align-items: center;
      }

      .accordion-container .mat-form-field + .mat-form-field {
        margin-left: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  @Input()
  expansionPanelItems: Layout.PanelItem[];

  @Input()
  hideToggle = false;

  @Input()
  multi = false;

  @Input()
  navigationalActions = true;

  @Input()
  togglePosition: MatAccordionTogglePosition = 'after';

  activeStep = 0;

  trackByFn = createTrackBy();
}
