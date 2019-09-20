import * as authentication from '@feathersjs/authentication';
import { disallow, discard } from 'feathers-hooks-common';

import getRedirect from '../../hooks/get-redirect';
import { cacheBefore, cacheAfter } from '../../hooks/cache';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;

export default {
  before: {
    all: [],
    find: [disallow('external'), cacheBefore],
    get: [getRedirect()],
    create: [authenticate('jwt')],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')],
  },

  after: {
    all: [],
    find: [discard('userId', 'id'), cacheAfter(15000)],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
