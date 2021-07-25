import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ConfigCollectionQuery, ConfigResponse, StateService } from '@ui/shared';
import { Apollo } from 'apollo-angular';
import { EmptyObject } from 'apollo-angular/types';
import { Subscription } from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

@Injectable()
export class ResumeCommonResolver implements Resolve<Subscription> {
  constructor(private apollo: Apollo, private stateService: StateService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.apollo
      .query<ConfigResponse, EmptyObject>({ query: ConfigCollectionQuery.CONFIGS })
      .pipe(
        tap(({ data }) => this.stateService.patch('configs', data?.configs)),
        mapTo(null)
      )
      .subscribe();
  }
}
