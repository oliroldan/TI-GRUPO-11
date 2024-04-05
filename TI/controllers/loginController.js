/* crear el modulo en si */

const login = {
    index: function (req, res, next) {
        res.render('login', { title: 'Ingresar' });
      }
};

/* exportar el modulo */
module.exports = login;