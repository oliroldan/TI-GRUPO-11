/* crear el modulo en si */
const db = require("../database/models");

const index = {
  index: function (req, res, next) {
    let filtrado = {
      order: [
        ["createdAt", "DESC"]
      ],
      include: [
        { association: "usuario" },
        { association: "comentario" }
      ]
    }
    db.Producto.findAll(filtrado)
      .then(function (result) {
        //return res.send(result)
        res.render('index', { productos: result, title: 'Express' })
      })
      .catch(function (error) {
        return console.log(error)
      });
  }
};

/* exportar el modulo */
module.exports = index;