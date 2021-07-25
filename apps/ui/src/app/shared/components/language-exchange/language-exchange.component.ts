import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-exchange',
  template: `
    <ng-container *ngIf="isClassic; else elseTemplate">
      <a
        mat-button
        *ngFor="let lang of translate.getLangs()"
        (click)="onLanguageChange(lang)"
      >
        {{ languages[lang] | translate }}
      </a>
    </ng-container>
    <ng-template #elseTemplate>
      <button mat-mini-fab color="accent" [matMenuTriggerFor]="menu">
        <mat-icon>language</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <ng-container *ngFor="let lang of translate.getLangs()">
          <button mat-menu-item (click)="onLanguageChange(lang)">
            <span>{{ languages[lang] | translate }}</span>
          </button>
        </ng-container>
      </mat-menu>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageExchangeComponent {
  @Input()
  isClassic: boolean;

  selected;

  languages = {
    'tr-TR': 'Türkçe',
    'en-US': 'English',
  };

  constructor(public translate: TranslateService) {}

  onLanguageChange($lang): void {
    this.translate.use($lang);
  }
}
