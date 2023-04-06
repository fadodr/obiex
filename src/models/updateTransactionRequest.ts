import { sequelize } from '../configs';
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';

export class UpdateTransactionRequest extends Model<
  InferAttributes<UpdateTransactionRequest>,
  InferCreationAttributes<UpdateTransactionRequest>
> {
  declare id: CreationOptional<string>;
  declare log: string
}

UpdateTransactionRequest.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        log: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: true,
        sequelize,
    }
);
