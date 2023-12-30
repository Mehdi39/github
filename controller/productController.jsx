const Product = require('../models/Product')

const addProduct = async (req, res) => {
    try {
        const newProduct = new Product({
          ...req.body,
        });

        await newProduct.save();
        res.send(newProduct)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
}

const getAllProducts = async (req, res) => {
    try {
        const allProduct = await Product.find({});
        res.send(allProduct)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

module.exports = {
    addProduct,
    getAllProducts
}