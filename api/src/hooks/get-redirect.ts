// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
import { Hook, HookContext } from '@feathersjs/feathers';

export default (options = { limit: 720 }): Hook => async (context: HookContext) => {
  // eslint-disable-next-line no-param-reassign
  context.result = await context.app.service('reading').find({
    query: {
      $limit: options.limit,
      $sort: { createdAt: -1 },
    },
  });

  return context;
};
