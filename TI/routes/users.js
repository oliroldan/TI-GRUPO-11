var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', usersController.index);

router.get('/login', usersController.login);

router.get('/register', usersController.register);

router.get('/profile-edit', usersController.edit);

module.exports = router;


