import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import {
  ColorSchemeService,
  GraphqlService,
  LOADER,
  LocalStorageService,
  Person,
  PersonCollectionQuery,
  PersonsResponse,
} from './shared';

@UntilDestroy()
@Component({
  selector: 'curriculum-vitae-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'ui';

  persons: Person[] = [];
  persons$: Observable<PersonsResponse>;
  error: any;

  constructor(
    private graphqlService: GraphqlService,
    private localStorageService: LocalStorageService,
    private colorSchemeService: ColorSchemeService,
    private translate: TranslateService
  ) {
    this.colorSchemeService.load();
    this.setLang();
  }

  ngOnInit() {
    this.persons$ = this.graphqlService.watch<PersonsResponse>(
      PersonCollectionQuery.PERSONS
    );
  }

  get loader$() {
    return this.localStorageService.listenStorageItem(LOADER);
  }

  private setLang(): void {
    this.translate.addLangs(['en-US', 'tr-TR']);

    const state = JSON.parse(window.localStorage.getItem('SessionState'));

    this.translate.use((state && state.lang) || 'en-US');
  }
}
