var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// get todos los productos
router.get('/index.ejs', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile.ejs', function (req, res, next) {
  res.render('profile', { title: 'Profile' });
});

router.get('/product-add.ejs', function (req, res, next) {
  res.render('product-add', { title: 'Products-add' });
});

router.get('/product.ejs', function (req, res, next) {
  res.render('product', { title: 'Products' });
});

router.get('/login.ejs', function (req, res, next) {
  res.render('login', { title: 'Ingresar' });
});

router.get('/register.ejs', function (req, res, next) {
  res.render('register', { title: 'Registrarse' });
});

router.get('/profile-edit.ejs', function (req, res, next) {
  res.render('profile-edit', { title: 'Editar' });
});

module.exports = router;
