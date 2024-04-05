/* crear el modulo en si */

const register = {
    index: function (req, res, next) {
        res.render('register', { title: 'Registrarse' });
      }
};

/* exportar el modulo */
module.exports = register;