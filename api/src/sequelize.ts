import { Sequelize } from 'sequelize';
import { Application } from './declarations';

export default function (app: Application) {
  const connectionString = app.get('postgres');
  const sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    logging: false,
    define: {
      freezeTableName: true,
    },
  });
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  // eslint-disable-next-line @typescript-eslint/unbound-method, no-param-reassign
  app.setup = function setup(...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const { models } = sequelize;
    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        (models[name] as any).associate(models);
      }
    });

    // Sync to the database
    app.set('sequelizeSync', sequelize.sync(/* { force: true } */));

    return result;
  };
}
