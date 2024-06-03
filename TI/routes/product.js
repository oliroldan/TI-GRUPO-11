var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const productController = require('../controllers/productController')

router.get('/', productController.index);

router.get('/product-add', productController.add);

router.get('/search-results', productController.search)

module.exports = router;