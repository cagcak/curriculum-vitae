import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { GraphqlService, ResumeCollectionQuery, ResumeResponse, SECOND, StateService } from '@ui/shared';
import { Subscription } from 'rxjs';
import { mapTo, takeWhile, tap } from 'rxjs/operators';

@Injectable()
export class ResumeEditResolver implements Resolve<Subscription> {
  constructor(private graphqlService: GraphqlService, private stateService: StateService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.graphqlService
      .watch<ResumeResponse>(ResumeCollectionQuery.RESUME, {
        variables: { _id: route.params?.id },
        pollInterval: 10 * SECOND,
      })
      .pipe(
        tap(({ resume }) => this.stateService.patch('resume', resume)),
        mapTo(null),
        takeWhile((val) => !this.stateService.snapshot('resume'))
      )
      .subscribe();
  }
}
