import { sequelize } from '../configs';
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';

export class Transactions extends Model<
  InferAttributes<Transactions>,
  InferCreationAttributes<Transactions>
> {
  declare id: CreationOptional<string>;
  declare clientId: string;
  declare transactionId: string;
}

Transactions.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    clientId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transactionId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize,
  }
);
