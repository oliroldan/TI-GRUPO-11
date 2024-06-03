/* crear el modulo en si */
const db = require("../database/models");

const index = {
  index: function (req, res, next) {
    db.Comentario.findAll()
      .then(function (productos) {
        res.render('index', { productos: productos, title: 'Express' })
      })
      .catch(function (error) {
        return console.log(error)
      });
  }
};

/* exportar el modulo */
module.exports = index;