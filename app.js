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
var sessions = require('./routes/sessions');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/geoDESA');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
  console.log('conectado');
});

var app = express();
// call socket.io to the app
app.io = require('socket.io')();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded());
// inicializamos cookie parser con una semilla para cifrar
app.use(cookieParser('geodesa2015'));
app.use(session({
  resave:true,
  saveUninitialized:true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);
app.use('/devices',devices);
app.use('/providers', providers);
app.use('/sessions', sessions);

app.use('/', routes);

//Helpers dinamicos:
app.use(function(req, res, next){
    //si no exite lo inicializa
    if(!req.session.redir){
          req.session.redir = '/';
    }
    console.log("redir-->",req.session.redir);
    //guardar path en session.redir para despues de login
    if (!req.path.match(/\/login|\/logout|\/user/)){
      req.session.redir = req.path;
    }
    //hacer visible el req.session en las vistas
    res.locals.session = req.session;
    next();
} );


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


app.io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('new message', function(data){
    console.log(data.name + ' new message: ' + data.message);
    app.io.emit('chat message', data);
  });
});

module.exports = app;
