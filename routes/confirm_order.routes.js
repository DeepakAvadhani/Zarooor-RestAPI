const express = require("express");
const router = express.Router();
const confirmOrderController = require("../controllers/confirm_order.controller");

router.post("/", confirmOrderController.createConfirmOrder);
router.get("/", confirmOrderController.getConfirmOrders);
router.get("/:id", confirmOrderController.getConfirmOrderById);
router.put("/:id", confirmOrderController.updateConfirmOrder);
router.delete("/:id", confirmOrderController.deleteConfirmOrder);

module.exports = router;
