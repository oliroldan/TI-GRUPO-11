/* crear el modulo en si */

const profile = {
    index: function (req, res, next) {
        res.render('profile', { title: 'Profile' });
      }
};

/* exportar el modulo */
module.exports = profile;