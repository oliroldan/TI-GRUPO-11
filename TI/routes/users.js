var express = require('express');
var router = express.Router();
const db = require("../database/models")

/* requerir el modelo del controlador */
const usersController = require('../controllers/usersController')
const { body } = require("express-validator")
const validations = [
  body("nombre")
    .notEmpty().withMessage("Debes ingresar un nombre").bail(),

  body("mail")
    .notEmpty().withMessage("Debes ingresar un mail").bail()
    .isEmail().withMessage("Debes ingresar un mail valido").bail()
    .custom(function (value, { req }) {
      return db.Usuario.findOne({
        where: { mail: value }
      })
        .then(function (user) {
          if (user) {
            throw new Error("Ya existe un usuario con ese mail")
          }
        })
    }),

  body("contra")
    .notEmpty().withMessage("Debes completar la password").bail()
    .isLength({ min: 4 }).withMessage("La contra debe ser mas larga")
]

/* const validationsEditUser = [
  body("nombre")
    .notEmpty().withMessage("Debes ingresar un nombre").bail(),

  body("mail")
    .notEmpty().withMessage("Debes ingresar un mail").bail()
    .isEmail().withMessage("Debes ingresar un mail valido").bail()
    .custom(function(value, {req}){
      console.log(value, req.session.user.mail, value != req.session.user.mail);
      if (value != req.session.user.mail){
        return db.Usuario.findOne({
          where: {mail: value}
        })
        .then(function(user){
            if(user){
                throw new Error("Ya existe un usuario con ese mail")
            }
        })
      }
    }),

  body("contra")
    .notEmpty().withMessage("debes completar la password").bail()
    .isLength({min: 4}).withMessage("la contra debe ser mas larga")
] */

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', usersController.index);

router.get('/profile/:id', usersController.perfilUser);

// LOGIN mostrar formulario
router.get('/login', usersController.login);

// POST de login
router.post("/login", usersController.loginUser)

// logout
router.post('/logout', usersController.logout);

// GET para mostrar formulario register 
router.get('/register', usersController.register);

// POST para capturar la info del formulario
router.post("/register", validations, usersController.store)

// GET de editar perfil
router.get('/profile-edit/:idPerfil', usersController.edit);

//router.post("/profile-edit", usersController.edit)

router.post("/update", usersController.update);

module.exports = router;