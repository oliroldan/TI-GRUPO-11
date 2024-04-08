var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile.ejs', usersController.index);

router.get('/login.ejs', usersController.login);

router.get('/register.ejs', usersController.register);

router.get('/profile-edit.ejs', usersController.edit);

module.exports = router;
