/* crear el modulo en si */
const db = require("../database/models")

const users = {
    index: function (req, res, next) {
        res.render('profile', { usuario: datos.usuario, productos: datos.productos, title: 'Profile' });
      },
    register: function (req, res, next) {
        res.render('register', { title: 'Registrarse' });
      },
    login: function (req, res, next) {
        res.render('login', { title: 'Ingresar' });
      },
    edit: function (req, res, next) {
        res.render('profile-edit', { usuario: datos.usuario, title: 'Editar' });
      }
};

/* exportar el modulo */
module.exports = users;