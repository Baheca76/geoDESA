var mongoose = require ('mongoose'),Schema = mongoose.Schema;
var User = require ('../models/usersModels.js');


//var users = { admin1: {id:1, username:"admin1", password:"admin1", isAdmin: true, isApprove: true},
//              admin2: {id:2, username:"admin2", password:"admin2", isAdmin: true, isApprove:true },
//              user1: {id:3, username:"user1", password:"user1", isAdmin: false, isApprove:true }
//            }

// Comprueba si el usuario esta registrado en users
// Si autenticación falla o hay errores se ejecuta callback(error).
exports.autenticar = function(login, password, callback) {
  User.find({userName: login}, function(error, user){
    if (error){
      callback(new Error('no existe el usuario'));
    }
    if (user[0].password == password){
      callback(null, user[0]);
    } else {
      callback(new Error("Contraseña incorrecta"), null);
    }
  });
};


exports.new = function(req, res) {
  res.render('users/new', {UserSchema: "", errors: [], title : "Nuevo usuario"});
};

exports.create = function(req, res) {

     var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dni:req.body.dni,
        userName: req.body.userName,
        password: req.body.password,
        mail: req.body.mail,
        isAdmin: req.body.isAdmin,
        isApprove: true
    });
    user.save(function (error){
      if (error){
        res.send(error);
      }
      res.json({mensaje: "usuario creado"});
    });
};

exports.insertar = function(req, res){


  var user = new User({
    firstName: 'administrador1',
    lastName:'administrador1',
    userName: 'admin1',
    password: 'admin1',
    isAdmin:true,
    isApprove:true
  });
  user.save(function (error){
    if (error){
      res.send(error);
    }
    res.json({mensaje: "usuario creado"});
  });

};

exports.solicitudalta = function(req, res){

  res.render('users/solicitudalta', {UsersSchema: "", errors: [], title : "solicitudalta"});

};

exports.list = function(req,res){

  User.find({},function(error, users){

      if (error){
              res.send(error);
      }
        req.session.redir = "/users"+req.path;
        console.log(req.path);
        console.log(req.session.redir);
        res.locals.session = req.session;
        res.render('users/list', {listUsers: users});

  });

};

// Middleware to preload de users
exports.load = function(req, res, next, userId){
  console.log("pasa por load");
  User.find({_id: userId}, function(error, user){
    if (error){
        res.send(error);
    }
    req.user = user[0];
    console.log(req.user);
    next();
  });

};

exports.show = function(req, res){
  console.log("Show...")
  console.log(req.user);
  console.log(req.path);
  res.render('users/show', {user: req.user, redir: req.session.redir});
};


// PUT /user/:id
exports.update = function(req, res, next) {

};
exports.delete = function(req, res) {


};
