/* crear el modulo en si */
const datos = require("../db/datos")

const product = {
    index: function (req, res, next) {
        res.render('product', {producto: datos.productos[5], title: 'Products' });
      },
    add: function (req, res, next) {
        res.render('product-add', { title: 'Products-add' });
      }
};

/* exportar el modulo */
module.exports = product;