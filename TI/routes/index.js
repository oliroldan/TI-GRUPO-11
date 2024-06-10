var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const indexController = require('../controllers/indexController');

// get todos los productos
router.get('/', indexController.index);

module.exports = router
