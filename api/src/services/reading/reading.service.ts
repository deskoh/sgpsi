// Initializes the `reading` service on path `/reading`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Reading } from './reading.class';
import createModel from '../../models/reading.model';
import hooks from './reading.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'reading': Reading & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const Model = createModel(app);
  const paginate = {
    default: 720,
    max: 720,
  };

  const options = {
    Model,
    paginate,
  };

  // Initialize our service with any options it requires
  app.use('/reading', new Reading(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('reading');

  service.hooks(hooks);

  service.publish(() => app.channel('anonymous'));
}
