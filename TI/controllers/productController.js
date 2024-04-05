/* crear el modulo en si */

const product = {
    index: function (req, res, next) {
        res.render('product', { title: 'Products' });
      }
};

/* exportar el modulo */
module.exports = product;