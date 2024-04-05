var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')
const loginController = require('../controllers/loginController')
const profileController = require('../controllers/profileController')
const productController = require('../controllers/productController')
const registerController = require('../controllers/registerController')
const addController = require('../controllers/addController')
const editController = require('../controllers/editController')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// get todos los productos
router.get('/index.ejs', indexController.index);

router.get('/profile.ejs', profileController.index);

router.get('/product-add.ejs', addController.index);

router.get('/product.ejs', productController.index);

router.get('/login.ejs', loginController.index);

router.get('/register.ejs', registerController.index);

router.get('/profile-edit.ejs', editController.index);

module.exports = router;
