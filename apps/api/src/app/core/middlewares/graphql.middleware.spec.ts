import { GraphqlMiddleware } from './graphql.middleware';

describe('GraphqlMiddleware', () => {
  it('should be defined', () => {
    expect(new GraphqlMiddleware()).toBeDefined();
  });
});
