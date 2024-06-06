/* crear el modulo en si */
const db = require("../database/models")

const users = {
    index: function (req, res, next) {
      db.Usuario.findAll()
      .then(function (respuesta) {
        return res.send(respuesta)
      })
      .catch(function (error) {
        return console.log(error)
      });  
      },
   // index: function (result) {
   //     return res.send(result)
   //     res.render('profile', { usuario: datos.usuario, productos: datos.productos, title: 'Profile' });
   //   },
    register: function (req, res, next) {
        res.render('register', { title: 'Registrarse' });
      },
    login: function (req, res, next) {
        res.render('login', { title: 'Ingresar' });
      },
    edit: function (req, res, next) {
        res.render('profile-edit', { usuario: datos.usuario, title: 'Editar' });
      },
    store: function(req, res) {
        let form = req.body;
        return res.send(form)
        db.Usuario.create(form)
        .then((result) => {
            return res.redirect("/product")
        }).catch((err) => {
          return console.log(err);
        })
      }
};

/* exportar el modulo */
module.exports = users;