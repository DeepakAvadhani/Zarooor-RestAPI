const { CartItem } = require("../models");

exports.createCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.create(req.body);
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCartItemById = async (req, res) => {
  try {
    const cartItem = await CartItem.findByPk(req.params.id);
    if (cartItem) {
      res.status(200).json(cartItem);
    } else {
      res.status(404).json({ error: "CartItem not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const [updated] = await CartItem.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedCartItem = await CartItem.findByPk(req.params.id);
      res.status(200).json(updatedCartItem);
    } else {
      res.status(404).json({ error: "CartItem not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const deleted = await CartItem.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "CartItem not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
