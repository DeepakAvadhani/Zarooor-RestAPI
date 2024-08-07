const express = require("express");
const router = express.Router();
const groceryController = require("../controllers/grocery.controller");

router.post("/", groceryController.createGrocery);
router.get("/", groceryController.getGroceries);
router.get("/:id", groceryController.getGroceryById);
router.put("/:id", groceryController.updateGrocery);
router.delete("/:id", groceryController.deleteGrocery);

module.exports = router;
