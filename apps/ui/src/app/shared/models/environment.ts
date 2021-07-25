import { MutationOptions, QueryOptions } from '@apollo/client/core';
import { WatchQueryOptions } from 'apollo-angular';
import { EmptyObject } from 'apollo-angular/types';
import { Url } from 'url';

type WatchQuery = Partial<WatchQueryOptions<EmptyObject>>;
type Query<Q> = Partial<QueryOptions<Q>>;
type Mutate<T, V> = Partial<MutationOptions<T, V>>;

interface DefaultApolloOptions<
  T = EmptyObject,
  V = EmptyObject,
  Q = EmptyObject
> {
  watchQuery: WatchQuery;
  query: Query<Q>;
  mutate: Mutate<T, V>;
}

export interface Environment {
  production: boolean;
  paths: {
    api: Partial<Url>;
  };
  defaultApolloOptions: DefaultApolloOptions;
}
