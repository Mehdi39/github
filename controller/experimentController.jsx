const Experiment = require('../models/Experiment');

const addExperiment = async (req, res) => {
  try {
    const newProduct = new Experiment({
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

const getAllExperiments = async (req, res) => {
  try {
    const allProduct = await Experiment.find({});
    res.send(allProduct);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
};

module.exports = {
  addExperiment,
  getAllExperiments,
};
