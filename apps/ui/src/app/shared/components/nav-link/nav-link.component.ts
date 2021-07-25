import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  template: `
    <ng-container *ngIf="isWideScreen; else navbarTemplateRef">
      <a [routerLink]="linkHref" mat-button>
        <ng-container *ngTemplateOutlet="iconTemplateRef"></ng-container>
      </a>
    </ng-container>
    <ng-template #navbarTemplateRef>
      <a [routerLink]="linkHref" router mat-list-item>
        <ng-container *ngTemplateOutlet="iconTemplateRef"></ng-container>
      </a>
    </ng-template>
    <ng-template #iconTemplateRef>
      <mat-icon *ngIf="iconName">{{ iconName }}</mat-icon>
      {{ iconLabel | translate }}
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinkComponent {
  @Input()
  isWideScreen = true;

  @Input()
  iconName: string;

  @Input()
  iconLabel: string;

  @Input()
  linkHref: any[] | string;
}
