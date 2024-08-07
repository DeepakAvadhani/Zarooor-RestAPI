const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const User = require("./user.model");
const Address = require("./address.model");

const OrderTable = sequelize.define(
  "OrderTable",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.BIGINT,
      references: {
        model: User,
        key: "id",
      },
    },
    address_id: {
      type: DataTypes.BIGINT,
      references: {
        model: Address,
        key: "id",
      },
    },
    reference_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: "order_table",
    timestamps: false,
  }
);

// Define associations
User.hasMany(OrderTable, { foreignKey: "id" });
OrderTable.belongsTo(User, { foreignKey: "id" });

Address.hasMany(OrderTable, { foreignKey: "address_id" });
OrderTable.belongsTo(Address, { foreignKey: "address_id" });

module.exports = OrderTable;
