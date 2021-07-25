import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

interface Options {
  edit: boolean;
  remove: boolean;
}

@Component({
  selector: 'ui-section-header',
  template: `
    <mat-card class="header-card">
      <mat-card-header>
        <div
          fxLayout="row"
          fxFlexAlign="center"
          fxLayoutAlign="space-between center"
          fxLayoutGap.md="16px 20px grid"
          fxFlexFill
        >
          <div *ngIf="iconPath" mat-card-avatar [ngStyle]="headerIconStyle"></div>
          <div>
            <div fxLayout="row" fxFlexAlign="center">
              <button *ngIf="_options?.edit" mat-icon-button color="accent" (click)="editing ? onSave() : onEdit()">
                <mat-icon>{{ editing ? 'save' : 'mode_edit' }}</mat-icon>
              </button>
              <div>
                <ng-container *ngIf="editing; else elseTemplate">
                  <mat-form-field appearance="fill">
                    <mat-label>Title</mat-label>
                    <input matInput [(ngModel)]="title" />
                  </mat-form-field>
                </ng-container>
                <ng-template #elseTemplate>
                  <mat-card-title>
                    {{ title | sentence }}
                  </mat-card-title>
                </ng-template>
                <mat-card-subtitle *ngIf="subtitle">{{ subtitle | sentence }}</mat-card-subtitle>
              </div>
            </div>
          </div>
          <div *ngIf="_options?.remove">
            <button mat-icon-button color="warn" (click)="remove.emit()">
              <mat-icon>remove</mat-icon>
            </button>
          </div>
        </div>
        <ng-content #extraContent></ng-content>
      </mat-card-header>
    </mat-card>
  `,
  styles: [
    `
      div.mat-card-header-text {
        margin: 0;
      }
      .mat-card-image {
        max-width: 320px;
        max-height: 176px;
      }
      .mat-mini-fab {
        margin: 0 0.3em;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  @Input()
  title = 'Sample Header';

  @Input()
  subtitle: string;

  @Input()
  iconPath: string;

  @Input()
  set options(ops: Options) {
    this._options = { ...this._options, ...(ops && { ...ops }) };
  }

  @Output()
  save = new EventEmitter<string>();

  @Output()
  edit = new EventEmitter<boolean>();

  @Output()
  remove = new EventEmitter();

  editing = false;
  _options: Options = {
    edit: true,
    remove: true,
  };

  get headerIconStyle(): { [key: string]: string } {
    return {
      backgroundImage: `url(${this.iconPath})`,
      backgroundSize: 'cover',
    };
  }

  onEdit() {
    this.editing = !this.editing;
    this.edit.emit(this.editing);
  }

  onSave() {
    this.editing = !this.editing;
    this.save.emit(this.title);
  }
}
