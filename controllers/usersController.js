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
  console.log("userId: "+userId);
  User.find({_id: userId}, function(error, user){
    if (error){
        console.log("Ojo hay error");
        res.send(error);
    }
    console.log(req.user);
    req.user = user[0];
    next();
  });

};

exports.show = function(req, res){
  console.log("Show...")
  console.log(req.user);
  console.log(req.path);
  res.render('users/show', {user: req.user, redir: req.session.redir});
};

//GET /users/:userId/edit
exports.edit = function(req, res){
  res.render('users/edit', {user: req.user, redir: req.session.redir});
};

// PUT /users/:id
exports.update = function(req, res) {

  console.log("pasa por aqui - update");
  console.log(req.body.firstName);

  User.findById(req.user._id, function (err, user) {
    if (err) return res.send(err);
    console.log("User en mongodb:"+user);
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.save(function (err) {
      if (err) return res.send(err);
      res.send(user);
    });

  });

  /*update({_id :req.user._id}, {$set: {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dni: req.body.dni,
    mail: req.body.mail,
    }}, function(error, numberAffected, rawResponse){
      if (error){
        res.send(error);
      }
      res.redirect('users/');
    }
  );*/
};

exports.delete = function(req, res) {
  User.find({_id: req.params.id}, function(err, user){
    console.log('oos')
    user.remove(function(err){
      if (err){
        res.send(error);
      }
        console.log('usuario borrado');
        res.redirect('/');
    })
  })
};
