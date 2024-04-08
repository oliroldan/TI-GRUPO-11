var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController')

router.get('/product.ejs', productController.index);

router.get('/product-add.ejs', productController.add);

module.exports = router;