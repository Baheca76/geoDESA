var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');
var devices = require('./routes/devices');
var providers = require('./routes/providers');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(session());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);
app.use('/devices',devices);
app.use('/providers', providers);

//Helpers dinamicos:
/*app.use(function(req, res,redir){
    //si no exite lo inicializa
    if(!req.session.redir){
          req.session.redir = '/';
    }
    //guardar path en session.redir para despues de login
    if (!req.path.math(/\/login|\/logout|\/user/)){
      req.session.redirt = req.path;
    }
    //hacer visivle el req.session en las vistas
    res.locals.session = req.sessins;
    next();
} );*/

app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
