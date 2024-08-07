const sequelize = require('../config/sequelize');
const User = require('./user.model');
const Address = require('./address.model');
const ShopDetails = require('./shop_details.model');
const Grocery = require('./grocery.model');
const Cart = require('./cart.model');
const CartItem = require('./cartitem.model');
const OrderTable = require('./orders_table.model');
const OrderDetails = require('./orders_detail.model');
const ConfirmOrder = require('./confirm_order.model');

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database & tables created!');
  });

module.exports = {
  User,
  Address,
  ShopDetails,
  Grocery,
  Cart,
  CartItem,
  OrderTable,
  OrderDetails,
  ConfirmOrder,
};
