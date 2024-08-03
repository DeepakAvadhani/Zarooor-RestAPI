const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const ShopDetails = require("./shop_details.model");

const Grocery = sequelize.define(
  "Grocery",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    shop_id: {
      type: DataTypes.BIGINT,
      references: {
        model: ShopDetails,
        key: "id",
      },
    },
  },
  {
    tableName: "groceries",
    timestamps: false,
  }
);

// Define associations
ShopDetails.hasMany(Grocery, { foreignKey: "shop_id" });
Grocery.belongsTo(ShopDetails, { foreignKey: "shop_id" });

module.exports = Grocery;
