var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const productController = require('../controllers/productController')
const { body } = require("express-validator")
const validations = [
  body("nombre")
    .notEmpty().withMessage("debes ingresar un nombre").bail(),

  body("descripcion")
    .notEmpty().withMessage("debes ingresar una descripcion del producto").bail(),

  body("fotoProducto")
    .notEmpty().withMessage("debes ingresar la ruta a la foto").bail()
]

const validationsComment = [
  body("comentario")
    .notEmpty().withMessage("debes ingresar un comentario").bail()
    .isLength({ min: 3 }).withMessage("el comentario debe ser mas largo")
]

router.get('/', productController.index);

router.get('/detalle/:id', productController.detalle);

router.get('/product-add', productController.add);

router.get('/search-results', productController.search)

router.post("/productAdd", validations, productController.store);

router.get('/edit/:idProducto', productController.edit);

router.post("/update", validations, productController.update);

router.post("/delete", productController.delete);

router.post("/comentario", validationsComment, productController.addComment);

module.exports = router;