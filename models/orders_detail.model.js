const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const OrderTable = require('./orders_table.model');
const Grocery = require('./grocery.model');

const OrderDetails = sequelize.define('OrderDetails', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  order_id: {
    type: DataTypes.BIGINT,
    references: {
      model: OrderTable,
      key: 'id',
    },
  },
  product_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Grocery,
      key: 'id',
    },
  },
  stock: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  shop_id: {
    type: DataTypes.BIGINT,
    references: {
      model: Grocery,
      key: 'shop_id',
    },
  },
  reference_number: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
}, {
  tableName: 'order_details',
  timestamps: false,
});

// Define associations
OrderTable.hasMany(OrderDetails, { foreignKey: 'order_id' });
OrderDetails.belongsTo(OrderTable, { foreignKey: 'order_id' });

Grocery.hasMany(OrderDetails, { foreignKey: 'product_id' });
OrderDetails.belongsTo(Grocery, { foreignKey: 'product_id' });

module.exports = OrderDetails;
