/* crear el modulo en si */
const db = require("../database/models")
const op = db.Sequelize.Op

const product = {
    index: function (req, res, next) {
      db.Producto.findAll()
      .then(function (respuesta) {
        //return res.send(respuesta)
        return res.render('product', {producto: respuesta , title: 'Products' })
      })
      //datos.productos[4]
      .catch(function (error) {
        return console.log(error)
      });  
      },
    add: function (req, res, next) {
      db.Usuario.findAll()
      .then(function (result) {
        //return res.send(result)
        res.render('product-add', { usuario: result, title: 'Products-add' });
      })
      .catch(function (error) {
        return console.log(error)
      });    
      },
    search: function (req, res, next) {
        let productoBuscado = req.query.search;
        let filtrado = {
          where: {
            nombre: {[op.like]: "%" + productoBuscado + "%"}
          }
        }

        //return res.send(productoBuscado)
        db.Producto.findOne(filtrado)
        .then(function (productos) {
          res.send(productos)
          res.render('search-results', { listado: productos, title: 'Search results' });
          //datos.filtrarProductos(productoBuscado)
        }) 
        .catch(function (error) {
         return console.log(error)
       })   
      },

    filtrarProductos: function(req, res) {
        let productoBuscado = req.params.productoBuscado; 
        
        db.Producto.findByPk(productoBuscado)
        .then(function(resultado) {
          return res.render("Productos", {listado : resultado});
          //return res.render("Productos", {listado : datos.filtrarProductos(productoBuscado)})
          //return res.send(resultado)
        })
        .catch(function(err){
          return console.log(err);
        })

        return res.send(productoBuscado)
        
      },
};

/* exportar el modulo */
module.exports = product;