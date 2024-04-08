/* crear el modulo en si */

const users = {
    index: function (req, res, next) {
        res.render('profile', { title: 'Profile' });
      },
    register: function (req, res, next) {
        res.render('register', { title: 'Registrarse' });
      },
    login: function (req, res, next) {
        res.render('login', { title: 'Ingresar' });
      },
    edit: function (req, res, next) {
        res.render('profile-edit', { title: 'Editar' });
      }
};

/* exportar el modulo */
module.exports = users;