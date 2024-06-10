var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const db = require('./database/models');
const app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productRouter = require('./routes/product');

app.use('/', indexRouter);

app.use('/users', usersRouter);

app.use('/product', productRouter);

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// configuracion de session

app.use(session({
  secret: "MyApp",
  resave: false,
  saveUninitialized: true
}))

// pasar info de session a locals

app.use(function(req, res, next){
  if( req.session.user != undefined ){
    res.locals.user = req.session.user
  }

  return next()
})

// configuracion de cookie

app.use(function(req, res, next) {
  if (req.cookies.idUsuario != undefined && req.session.user == undefined) {
    let id = req.cookies.idUsuario; // puede ser cualquier numero

    db.Usuario.findByPk(id)
    .then(function(result) {
      req.session.user = result;
      res.locals.user = result;

      return next();
    }).catch(function(error) {

      return console.log(error);
    })

  } else {
    return next
  }
})

module.exports = app;
