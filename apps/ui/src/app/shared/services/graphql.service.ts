import { Injectable } from '@angular/core';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { Apollo, WatchQueryOptions } from 'apollo-angular';
import { EmptyObject } from 'apollo-angular/types';
import { DocumentNode } from 'graphql';
import { Observable, of, Subject } from 'rxjs';
import { catchError, finalize, map, takeUntil, tap } from 'rxjs/operators';
import { LOADER } from '../constants';
import { NetworkStatus } from '../enums';
import { LocalStorageService } from './localstorage.service';

@Injectable({ providedIn: 'root' })
export class GraphqlService {
  constructor(private apollo: Apollo, private localStorageService: LocalStorageService) {}

  watch<R = EmptyObject>(
    query: DocumentNode | TypedDocumentNode<any, EmptyObject>,
    options?: Partial<WatchQueryOptions<EmptyObject>>
  ): Observable<R> {
    const stopSignal$ = new Subject<boolean>();

    return this.apollo
      .watchQuery({ query, ...(options || {}) })
      .valueChanges.pipe(
        tap(({ error, errors, ...rest }) => {
          if (error || errors?.length) {
            // tosater handler
            stopSignal$.next(true);
          }

          return { error, errors, ...rest };
        }),
        map(({ loading, networkStatus, data, ...rest }) => {
          const status: NetworkStatus[] = [NetworkStatus.ready];

          if (loading || !status.includes(networkStatus) || !data) {
            // console.log('loader show, contenct hide');
            this.localStorageService.set(LOADER, true);
          } else {
            // console.log('loader hide, contenct show');
            this.localStorageService.set(LOADER, false);
          }

          return { data, ...rest };
        }),
        map(({ data }) => data as R),
        catchError((error) => {
          console.log('error handled!', error);
          return of(null);
        })
      )
      .pipe(
        finalize(() => stopSignal$.next(false)),
        takeUntil(stopSignal$)
      );
  }
}
