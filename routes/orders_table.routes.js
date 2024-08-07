const express = require("express");
const router = express.Router();
const orderTableController = require("../controllers/orders_table.controller");

router.post("/", orderTableController.createOrder);
router.get("/", orderTableController.getOrders);
router.get("/:id", orderTableController.getOrderById);
router.put("/:id", orderTableController.updateOrder);
router.delete("/:id", orderTableController.deleteOrder);

module.exports = router;
