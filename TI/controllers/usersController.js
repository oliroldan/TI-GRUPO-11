/* crear el modulo en si */
const db = require("../database/models");
const bcrypt = require('bcryptjs')
const{validationResult} = require("express-validator")

const users = {
    index: function (req, res, next) {
      let criterio = {
        include: [
          {association: "producto"}
        ],
        where:{
          id: req.session.user.id
        }  
    }
    db.Usuario.findAll(criterio)
    .then(function (respuesta) {
      // return res.send(respuesta)
      res.render('profile', { usuario: respuesta[0], productos: respuesta[0].producto, title: 'Profile' });
    })
    .catch(function (error) {
      return console.log(error)
    });  
    },
    register: function (req, res, next) {
        res.render('register', { title: 'Registrarse' });
    },
    login: function (req, res, next) {
        res.render('login', { title: 'Ingresar' });
    },
    loginUser: function (req, res) {
      let form = req.body;
      //res.send(form)
      let filtro = {
          where: [{mail: form.mail}]
      };

      db.Usuario.findOne(filtro)
      .then((result) => {
          if (result != null) {  
              //return res.send(result)
              let comparacion = bcrypt.compareSync(form.contra, result.contra);

              if (comparacion) {
                  req.session.user = result;
                  if (form.recordarme != undefined) {
                      res.cookie("idUsuario", result.id, {maxAge: 1000 * 60 * 35})
                  }
                  return res.redirect("/");
              } else {
                  return res.send("Error en la contraseña");
              }
          } else {
              return res.send("No hay mail parecidos a: " + form.mail);
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
    },
    store: function(req, res) {

      let errors = validationResult(req)
      if (errors.isEmpty()) {
        let form = req.body;
        //return res.send(form)
        let usuario = {
          mail: form.mail,
          contra: bcrypt.hashSync(form.contra, 10),
          nombre: form.nombre,
          fecha: form.fecha,
          dni: form.dni,
          fotoPerfil: form.fotoPerfil
        };
        db.Usuario.create(usuario)
          .then((result) => {
            return res.redirect("/users/login")
        }).catch((err) => {
            return console.log(err);
        })
      } else {
        //return res.send(errors.mapped())
          return res.render("register", {
            errors: errors.mapped(),
            old: req.body
        })
      } 
    },
    update: function(req, res) {
      let errors = validationResult(req)
      if (errors.isEmpty()){
        let form = req.body
        let filtrado = {
          where: {
            id: form.id
          }
        }
        //return res.send(form)
        db.Usuario.update(form, filtrado)
        .then(function(result) {
          //return res.send(result)
          return res.redirect("/users/profile")
        })
        .catch(function(err) {
          return console.log(err);
        })
      } else {
        return res.render("profile-edit", {
          errors: errors.mapped() ,
          old: req.body
        })
      }
    },
    logout: (req, res) => {
      req.session.destroy();
      res.clearCookie("idUsuario")
      return res.redirect("/")
    }
};

/* exportar el modulo */
module.exports = users;