import { AfterViewInit, ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { AbstractNgModelComponent } from '../../abstracts';
import { Common } from '../../graphql/models';

type Item = Common.FieldTitle;

@UntilDestroy()
@Component({
  selector: 'ui-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoCompleteComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCompleteComponent extends AbstractNgModelComponent implements AfterViewInit {
  @Input()
  label = 'Auto complete';

  @Input()
  formControlErrors: { [key: string]: string };

  @Input()
  items: Item[] = [
    {
      title: 'Item 1',
    },
    {
      title: 'Item 2',
    },
  ];

  formControlErrorMessage = '';

  filteredItems$: Observable<Item[]>;

  ngAfterViewInit(): void {
    this.listenItemsControl();
  }

  private listenItemsControl(): void {
    this.filteredItems$ = this.formControl?.valueChanges.pipe(distinctUntilChanged(), untilDestroyed(this)).pipe(
      map((item: string) => {
        const items = this.items || [];

        if (item) {
          return items.filter(({ title }) => title.toLowerCase().includes(item.toLowerCase()));
        } else {
          return items.slice();
        }
      })
    );
  }
}
