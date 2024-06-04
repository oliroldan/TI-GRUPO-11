/* crear el modulo en si */
const db = require("../database/models")

const product = {
    index: function (req, res, next) {
      db.Producto.findAll()
      .then(function (respuesta) {
        return res.send(respuesta)
        return res.render('product', {producto: respuesta , title: 'Products' });
      })
      //datos.productos[4]
      .catch(function (error) {
        return console.log(error)
      });  
      },
    add: function (req, res, next) {
      db.Producto.findAll()
      .then(function (productos) {
        res.render('product-add', { usuario: datos.usuario, title: 'Products-add' });
      })
      .catch(function (error) {
        return console.log(error)
      });    
      },
    search: function (req, res, next) {
        let productoBuscado = req.query.search; 

        db.Producto.findAll()
        .then(function (productos) {
          res.render('search-results', { listado: datos.filtrarProductos(productoBuscado), title: 'Search results' });
        }) 
        .catch(function (error) {
         return console.log(error)
       })   
      },
    filtrarProductos: function(req, res) {
        let productoBuscado = req.params.productoBuscado; 
        return res.render("Productos", {listado : datos.filtrarProductos(productoBuscado)})
      }
};

/* exportar el modulo */
module.exports = product;