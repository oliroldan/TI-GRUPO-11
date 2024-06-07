var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const productController = require('../controllers/productController')

router.get('/', productController.index);

router.get('/product-add', productController.add);

router.get('/search-results', productController.search)

router.post("/product-add", productController.store);

router.get('/:idProducto', productController.edit);

router.post("/update", productController.update);

module.exports = router;