import { Hook, HookContext } from '@feathersjs/feathers';
import logger from '../logger';

// Quick hack for caching to reduce DB calls.

const cache: any = {};

export const cacheBefore: Hook = (context: HookContext) => {
  const { query = {} } = context.params;
  const cached = cache[JSON.stringify(query)];

  if (cached && cached.expiry > Date.now()) {
    logger.verbose('Cache hit');
    // eslint-disable-next-line no-param-reassign
    context.result = cached;
  } else {
    logger.verbose('Cache miss');
  }
  return context;
};

export const cacheAfter = (cacheDuration: number): Hook => context => {
  const { query = {} } = context.params;
  const { result = {} } = context;
  const cacheData = { ...result, expiry: result.expiry || Date.now() + cacheDuration };
  cache[JSON.stringify(query)] = cacheData;
  return context;
};
