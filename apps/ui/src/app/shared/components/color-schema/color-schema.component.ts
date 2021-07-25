import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ColorSchemeService } from '../../services';

@Component({
  selector: 'app-color-schema',
  template: `
    <button mat-mini-fab color="accent" [matMenuTriggerFor]="menu">
      <mat-icon>invert_colors</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <ng-container *ngFor="let theme of themes">
        <button mat-menu-item (click)="setTheme(theme.name)">
          <mat-icon>{{ theme.icon }}</mat-icon>
          <span>{{ theme.name | translate }}</span>
          <mat-icon *ngIf="colorSchemeService.currentActive() === theme.name"
            >check</mat-icon
          >
        </button>
      </ng-container>
    </mat-menu>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorSchemaComponent {
  public themes = [
    {
      name: 'dark',
      icon: 'brightness_3',
    },
    {
      name: 'light',
      icon: 'wb_sunny',
    },
  ];

  constructor(public colorSchemeService: ColorSchemeService) {}

  setTheme(theme: string): void {
    this.colorSchemeService.update(theme);
  }
}
