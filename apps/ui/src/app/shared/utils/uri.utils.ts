import { Environment } from '../models';

export const getEndpoint = (environment: Environment): string => {
  const {
    paths: {
      api: { protocol, host, port, path },
    },
  } = environment;

  return `${protocol}://${host}:${port}/${path}`;
};
