const { Grocery } = require("../models");

exports.createGrocery = async (req, res) => {
  try {
    const grocery = await Grocery.create(req.body);
    res.status(201).json(grocery);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGroceries = async (req, res) => {
  try {
    const groceries = await Grocery.findAll();
    res.status(200).json(groceries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGroceryById = async (req, res) => {
  try {
    const grocery = await Grocery.findByPk(req.params.id);
    if (grocery) {
      res.status(200).json(grocery);
    } else {
      res.status(404).json({ error: "Grocery not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateGrocery = async (req, res) => {
  try {
    const [updated] = await Grocery.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedGrocery = await Grocery.findByPk(req.params.id);
      res.status(200).json(updatedGrocery);
    } else {
      res.status(404).json({ error: "Grocery not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteGrocery = async (req, res) => {
  try {
    const deleted = await Grocery.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Grocery not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
