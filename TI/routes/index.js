var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

// get todos los productos
router.get('/', indexController.index);

module.exports = router
