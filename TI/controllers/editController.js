/* crear el modulo en si */

const edit = {
    index: function (req, res, next) {
        res.render('profile-edit', { title: 'Editar' });
      }
};

/* exportar el modulo */
module.exports = edit;