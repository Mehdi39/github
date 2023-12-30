const express = require('express');
const router = express.Router();
const {
    addProduct,
    getAllProducts
} = require('../controller/productController');

// add new product but only 1 at a time
router.post('/add', addProduct);

// get all products
router.get('/', getAllProducts);

module.exports = router;