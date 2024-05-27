/* crear el modulo en si */
const db = require("../database/models")

const index = {
    index: function (req, res, next) {
      db.Producto.findAll()
        .then(function(productos){
          res.render('index', { productos: datos.productos, title: 'Express' })});
      }
};

/* exportar el modulo */
module.exports = index;