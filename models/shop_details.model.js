const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const ShopDetails = sequelize.define('ShopDetails', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  shop_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shop_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pincode: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  contact_details: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
}, {
  tableName: 'shop_details',
  timestamps: false,
});

module.exports = ShopDetails;
