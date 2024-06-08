var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', usersController.index);

/* LOGIN mostrar formulario */
router.get('/login', usersController.login);

// POST de login
router.post("/login", usersController.loginUser)

// logout
router.post('/logout', usersController.logout);

/* GET para mostrar formulario register */
router.get('/register', usersController.register);

/* POST para capturar la info del formulario */
router.post("/register", usersController.store)

// GET de editar perfil
router.get('/profile-edit/:idPerfil', usersController.edit);

//router.post("/profile-edit", usersController.edit)

router.post("/update", usersController.update);

module.exports = router;


