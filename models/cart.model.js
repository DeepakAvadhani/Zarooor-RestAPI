const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const User = require("./user.model");

const Cart = sequelize.define(
  "Cart",
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
  },
  {
    tableName: "carts",
    timestamps: false,
  }
);

// Define associations
User.hasMany(Cart, { foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });

module.exports = Cart;
