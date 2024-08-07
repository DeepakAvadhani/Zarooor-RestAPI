const express = require('express');
const router = express.Router();
const orderDetailsController = require('../controllers/orders_details.controller');

router.post('/', orderDetailsController.createOrderDetails);
router.get('/', orderDetailsController.getOrderDetails);
router.get('/:id', orderDetailsController.getOrderDetailsById);
router.put('/:id', orderDetailsController.updateOrderDetails);
router.delete('/:id', orderDetailsController.deleteOrderDetails);

module.exports = router;
