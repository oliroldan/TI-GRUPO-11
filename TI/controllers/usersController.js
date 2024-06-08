/* crear el modulo en si */
const db = require("../database/models")

const users = {
    index: function (req, res, next) {
      db.Usuario.findAll()
      .then(function (respuesta) {
       // return res.send(respuesta)
        res.render('profile', { usuario: respuesta, title: 'Profile' });
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
    loginUser: function (req, res) {
      let form = req.body;

      let filtro = {
          where: [{email: form.email}]
      };

      db.User.findOne(filtro)
      .then((result) => {
          if (result != null) {  
              let comparacion = bcrypt.compareSync(form.password, result.password);

              if (comparacion) {
                  req.session.user = result;
                  if (form.rememberme != undefined) {
                      res.cookie("userId", result.id, {maxAge: 1000 * 60 * 35})
                  }
                  return res.redirect("/");
              } else {
                  return res.send("Error en la contraseña");
              }
          } else {
              return res.send("No hay mail parecidos a: " + form.email);
          }

      }).catch((err) => {
          return console.log(err);
      });
  },
    edit: function (req, res, next) {
      let idPerfil = req.params.idPerfil;

      db.Usuario.findByPk(idPerfil)
      .then(function (resultId) {
        res.render('profile-edit', {perfil: resultId})
      })
      .catch(function (err) {
        return console.log(err);
      })

      //res.render('profile-edit', { usuario: datos.usuario, title: 'Editar' });
    },
    store: function(req, res) {
        let form = req.body;
        
        db.Usuario.create(form)
        .then((result) => {
            return res.redirect("/users/login")
        }).catch((err) => {
          return console.log(err);
        })
    },
    update: function(req, res) {
      let form = req.body
      let filtrado = {
        where: {
          id: form.id
        }
      }
      //return res.send(form)

      db.Usuario.update(form, filtrado)
      .then(function(params) {
        return res.redirect("/profile/id/" + form.id)
      })
      .catch(function(err) {
        return console.log(err);
      })
    },
    logout: (req, res) => {
      req.session.destroy();
      res.clearCookie("userId")
      return res.redirect("/")
    }
};

/* exportar el modulo */
module.exports = users;