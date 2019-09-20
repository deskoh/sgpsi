// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import {
  Sequelize, DataTypes, Model, BuildOptions,
} from 'sequelize';
import { Application } from '../declarations';

export interface Reading extends Model {
  readonly id: number;
  readonly value: number;
  readonly createdAt: Date;
}

type ReadingModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Reading;
};

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const reading = sequelizeClient.define('reading', {
    value: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
  }, {
    updatedAt: false,
    indexes: [
      { fields: ['createdAt'] },
    ],
    hooks: {
      beforeCount(options: any) {
        // eslint-disable-next-line no-param-reassign
        options.raw = true;
      },
    },
  }) as ReadingModelStatic;

  // eslint-disable-next-line no-unused-vars
  (reading as any).associate = function associate(models: any) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    reading.belongsTo(models.user);
  };

  return reading;
}
