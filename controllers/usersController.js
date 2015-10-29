var mongoose = require ('mongoose'),Schema = mongoose.Schema;;
var User = require ('../models/usersModels.js');


var users = { admin1: {id:1, username:"admin1", password:"admin1", isAdmin: true, isApprove: true},
              admin2: {id:2, username:"admin2", password:"admin2", isAdmin: true, isApprove:true },
              user1: {id:3, username:"user1", password:"user1", isAdmin: false, isApprove:true }
            }

// Comprueba si el usuario esta registrado en users
// Si autenticación falla o hay errores se ejecuta callback(error).
exports.autenticar = function(login, password, callback) {
  if(users[login]){
    if (password === users[login].password){
      callback(null, users[login]);
    }
    else{
      callback(new Error('password erróneo'));
    }
  }
  else{
    callback(new Error('no existe el usuario'));
  }

};
exports.new = function(req, res) {
  res.render('users/new', {UserSchema: "", errors: [], title : "Nuevo usuario"});
};
exports.create = function(req, res) {

     var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
        isAdmin: true,
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

}
