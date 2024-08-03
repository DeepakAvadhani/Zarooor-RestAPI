const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Cart = require("./cart.model");
const Grocery = require("./grocery.model");

const CartItem = sequelize.define(
  "CartItem",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    cart_id: {
      type: DataTypes.BIGINT,
      references: {
        model: Cart,
        key: "id",
      },
    },
    product_id: {
      type: DataTypes.BIGINT,
      references: {
        model: Grocery,
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "cart_items",
    timestamps: false,
  }
);

// Define associations
Cart.hasMany(CartItem, { foreignKey: "cart_id" });
CartItem.belongsTo(Cart, { foreignKey: "cart_id" });

Grocery.hasMany(CartItem, { foreignKey: "product_id" });
CartItem.belongsTo(Grocery, { foreignKey: "product_id" });

module.exports = CartItem;
