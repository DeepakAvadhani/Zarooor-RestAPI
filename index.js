const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const userRoutes = require('./routes/user.routes');
const groceryRoutes = require('./routes/grocery.routes');
const cartRoutes = require('./routes/cart.routes');
const cartItemRoutes = require('./routes/cart_items.routes');
const orderTableRoutes = require('./routes/orders_table.routes');
const orderDetailsRoutes = require('./routes/orders_details.routes');
const confirmOrderRoutes = require('./routes/confirm_order.routes');

app.use(express.json());

app.use('/users', userRoutes);
app.use('/grocery', groceryRoutes);
app.use('/carts', cartRoutes);
app.use('/cart-items', cartItemRoutes);
app.use('/orders', orderTableRoutes);
app.use('/order-details', orderDetailsRoutes);
app.use('/confirm-orders', confirmOrderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
