const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Address = require("./address.model");

const ConfirmOrder = sequelize.define(
  "ConfirmOrder",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    shop_address: {
      type: DataTypes.BIGINT,
      references: {
        model: Address,
        key: "id",
      },
    },
    user_address: {
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
    tableName: "confirm_order",
    timestamps: false,
  }
);

// Define associations
Address.hasMany(ConfirmOrder, { foreignKey: "shop_address" });
ConfirmOrder.belongsTo(Address, { foreignKey: "shop_address" });

Address.hasMany(ConfirmOrder, { foreignKey: "user_address" });
ConfirmOrder.belongsTo(Address, { foreignKey: "user_address" });

module.exports = ConfirmOrder;
