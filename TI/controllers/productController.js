/* crear el modulo en si */
const db = require("../database/models")
const op = db.Sequelize.Op
const { validationResult } = require("express-validator")

const product = {
  index: function (req, res, next) {
    
    db.Producto.findAll()
      .then(function (respuesta) {
        return res.render('product', { productos: respuesta, title: 'Products' })
      })
      .catch(function (error) {
        return console.log(error)
      });
  },
  add: function (req, res, next) {
    
    db.Usuario.findAll()
      .then(function (result) {
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
        nombre: { [op.like]: "%" + productoBuscado + "%" }
      },
      order: [
        ["createdAt", "DESC"]
      ],
      include: [
        { association: "usuario" },
        { association: "comentario" }
      ]
    }

    db.Producto.findAll(filtrado)
      .then(function (productos) {
        //res.send(productos)
        res.render('search-results', { listado: productos, title: 'Search results' });
        //datos.filtrarProductos(productoBuscado)
      })
      .catch(function (error) {
        return console.log(error)
      })
  },
  filtrarProductos: function (req, res) {
    let productoBuscado = req.params.productoBuscado;

    db.Producto.findByPk(productoBuscado)
      .then(function (resultado) {
        return res.render("Productos", { listado: resultado });
      })
      .catch(function (err) {
        return console.log(err);
      })

    return res.send(productoBuscado)
  },
  detalle: function (req, res) {
    let idProducto = req.params.id;

    let criterio = {
      include: [
        { association: "usuario" },
        { 
          association: "comentario", 
          include: [{ association: "usuario" }]
        }
      ],
      order: [
        [{ model: db.Comentario, as: 'comentario' }, 'createdAt', 'DESC']
      ]
    };

    db.Producto.findByPk(idProducto, criterio)
      .then((result) => {
        //return res.send(result)
        return res.render("product", { productos: result });
      }).catch((error) => {
        return console.log(error);
      });
  },
  store: function (req, res) {
    let errors = validationResult(req)

    if (errors.isEmpty()) {
      let form = req.body;
      console.log(form)
      // return res.send(form)

      db.Producto.create(form)
        .then((result) => {
          return res.redirect("/product/detalle/" + result.id)
        }).catch((err) => {
          return console.log(err);
        })
    } else {
      return res.render("product-add", {
        errors: errors.mapped(),
        old: req.body
      })
    }
  },
  edit: function (req, res, next) {
    let idProducto = req.params.idProducto;

    db.Producto.findByPk(idProducto)
      .then(function (resultId) {

        res.render('product-edit', { productos: resultId })
      })
      .catch(function (err) {
        return console.log(err);
      })
  },
  update: function (req, res) {

    let errors = validationResult(req)
    if (errors.isEmpty()) {
      let form = req.body
      let filtrado = {
        where: {
          id: form.id
        }
      }
      //return res.send(form)
      db.Producto.update(form, filtrado)
        .then(function (params) {
          //return res.send(params)
          return res.redirect("/product/detalle/" + form.id)
        })
        .catch(function (err) {
          return console.log(err);
        })
    } else {
      return res.render("product-edit", {
        errors: errors.mapped(),
        productos: req.body
      })
    }
  },
  delete: function (req, res) {
    let form = req.body;
    //return res.send(form)
    let filtrado = {
      where: {
        idProductos: form.idProductos
      },
      include: [
        { association: "usuario" },
        { association: "producto" }
      ]
    }
    
    db.Comentario.destroy(filtrado)
      .then(function () {
        return db.Producto.destroy(
          {where: {id: form.idProductos}}
        )
      })
      .then(function (params) {
        return res.redirect("/")
      })
      .catch(function (err) {
        return console.log(err);
      })
  },
  addComment: function (req, res) {
    let errors = validationResult(req)
    let form = req.body;
    if (errors.isEmpty()) {

      db.Comentario.create(form)
        .then(function (result) {
          return res.redirect("/product/detalle/" + form.idProductos)
        })
        .catch(function (err) {
          return res.send(err)
        })
    } else {
      return res.redirect("/product/detalle/" + form.idProductos)
    }
  }
};

/* exportar el modulo */
module.exports = product;