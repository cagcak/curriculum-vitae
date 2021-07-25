import { Environment } from '../app/shared';

export const environment: Environment = {
  production: true,
  paths: {
    api: {
      host: 'http://localhost:3333/graphql',
    },
  },
  defaultApolloOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
      notifyOnNetworkStatusChange: true,
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
    },
    mutate: {
      errorPolicy: 'ignore',
    },
  },
};
