/* crear el modulo en si */

const index = {
    index: function (req, res, next) {
        res.render('index', { title: 'Express' });
      }
};

/* exportar el modulo */
module.exports = index;