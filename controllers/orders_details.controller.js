const { OrderDetails } = require("../models");

exports.createOrderDetails = async (req, res) => {
  try {
    const orderDetails = await OrderDetails.create(req.body);
    res.status(201).json(orderDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrderDetails = async (req, res) => {
  try {
    const orderDetails = await OrderDetails.findAll();
    res.status(200).json(orderDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrderDetailsById = async (req, res) => {
  try {
    const orderDetails = await OrderDetails.findByPk(req.params.id);
    if (orderDetails) {
      res.status(200).json(orderDetails);
    } else {
      res.status(404).json({ error: "Order details not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrderDetails = async (req, res) => {
  try {
    const [updated] = await OrderDetails.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedOrderDetails = await OrderDetails.findByPk(req.params.id);
      res.status(200).json(updatedOrderDetails);
    } else {
      res.status(404).json({ error: "Order details not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOrderDetails = async (req, res) => {
  try {
    const deleted = await OrderDetails.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Order details not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
