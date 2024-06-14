var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const productController = require('../controllers/productController')

// GET todos los productos
router.get('/', productController.index);

router.get('/detalle/:id', productController.detalle);

router.get('/product-add', productController.add);

router.get('/search-results', productController.search)

router.post("/productAdd", productController.store);

router.get('/edit/:idProducto', productController.edit);

router.post("/update", productController.update);

router.post("/delete", productController.delete);

router.post("/comentario", productController.addComment);

module.exports = router;