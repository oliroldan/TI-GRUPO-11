var express = require('express');
var router = express.Router();

/* GET perfiles */
router.get('/profile', function (req, res, next) {
  res.render('profile', { title: 'Perfiles' });
});

module.exports = router;