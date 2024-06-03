var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

// GET para el perfil
router.get('/profile', usersController.index);

/* mostrar formulario LOGIN */
router.get('/login', usersController.login);

/* mostrar formulario REGISTER */
router.get('/register', usersController.register);

/* POST capturar la info del formulario */
router.post("/register", usersController.store)

// ruta por GET de editar perfil
router.get('/profile-edit', usersController.edit);

module.exports = router;


