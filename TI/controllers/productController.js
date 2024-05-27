/* crear el modulo en si */
const db = require("../database/models")

const product = {
    index: function (req, res, next) {
        res.render('product', {producto: datos.productos[4], title: 'Products' });
      },
    add: function (req, res, next) {
        res.render('product-add', { usuario: datos.usuario, title: 'Products-add' });
      },
    search: function (req, res, next) {
        let productoBuscado = req.query.search;  
        res.render('search-results', { listado: datos.filtrarProductos(productoBuscado), title: 'Search results' });
      },
    filtrarProductos: function(req, res) {
        let productoBuscado = req.params.productoBuscado; 
        return res.render("Productos", {listado : datos.filtrarProductos(productoBuscado)})
      }
};

/* exportar el modulo */
module.exports = product;