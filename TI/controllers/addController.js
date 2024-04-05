/* crear el modulo en si */

const add = {
    index: function (req, res, next) {
        res.render('product-add', { title: 'Products-add' });
      }
};

/* exportar el modulo */
module.exports = add;