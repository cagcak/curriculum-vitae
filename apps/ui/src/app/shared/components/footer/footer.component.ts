import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <mat-toolbar color="primary">
        <p>
          {{ 'app.footer' | translate }}
        </p>
      </mat-toolbar>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
