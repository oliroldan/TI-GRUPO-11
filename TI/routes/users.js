var express = require('express');
var router = express.Router();
const db = require("../database/models")

/* requerir el modelo del controlador */
const usersController = require('../controllers/usersController')
const{body} = require("express-validator")
const validations = [
	body("nombre")
	  .notEmpty().withMessage("debes ingresar un nombre").bail(),

  body("mail")
    .notEmpty().withMessage("debes ingresar un mail").bail()
    .isEmail().withMessage("este mail pertenece a otro usuario").bail(),
    /* .custom(function(mail, {req}) {
      db.Usuario.findOne({
        where: {mail: req.body.mail}
      })
      .then(function(user) {
        if(user){
          throw new Error("El mail igresado ya existe")
        }
      })
    }) */

  body("contra")
    .notEmpty().withMessage("debes completar la password").bail()
    .isLength({min: 4}).withMessage("la contra debe ser mas larga")
]

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
router.post("/register", validations, usersController.store)

// GET de editar perfil
router.get('/profile-edit/:idPerfil', usersController.edit);

//router.post("/profile-edit", usersController.edit)

router.post("/update", validations, usersController.update);

module.exports = router;


