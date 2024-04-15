/* crear el modulo en si */
const datos = require("../db/datos")

const index = {
    index: function (req, res, next) {
        res.render('index', { productos: datos.productos, title: 'Express' });
      }
};

/* exportar el modulo */
module.exports = index;