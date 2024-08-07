const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const User = require("./user.model");

const Address = sequelize.define(
  "Address",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    tableName: "addresses",
    timestamps: false,
  }
);

// Define associations
User.hasMany(Address, { foreignKey: "id" });
Address.belongsTo(User, { foreignKey: "id" });

module.exports = Address;
