/* crear el modulo en si */
const db = require("../database/models");

const index = {
  index: function (req, res, next) {
    db.Producto.findAll()
      .then(function (result) {
        res.render('index', { productos: result, title: 'Express' })
      })
      .catch(function (error) {
        return console.log(error)
      });
  },
  comentario: function (req, res, next) {
    db.Comentario.findAll()
    .then(function (respuesta) {
      return res.render('comentario', {comentario: respuesta , title: 'Comentario' })
    })
    //datos.productos[4] ??
    .catch(function (error) {
      return console.log(error)
    });  
    }
};

/* exportar el modulo */
module.exports = index;