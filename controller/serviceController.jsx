const Service = require('../models/Service');

const addService = async (req, res) => {
  try {
    const newProduct = new Service({
      ...req.body,
    });

    await newProduct.save();
    res.send(newProduct);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

const getAllService = async (req, res) => {
  try {
    const allProduct = await Service.find({});
    res.send(allProduct);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

module.exports = {
  addService,
  getAllService,
};
