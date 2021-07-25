import { Injectable } from '@nestjs/common';
import { MiddlewareContext, NextFn } from '@nestjs/graphql';

@Injectable()
export class GraphqlMiddleware {
  async logger(ctx: MiddlewareContext, next: NextFn) {
    const value = await next();

    // console.log(value);
    return value;
  }
}
