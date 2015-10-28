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

  res.render('users/new', {DeviceSchema: "", errors: [], title : "Nuevo usuario"});
  next();
};
exports.create = function(req, res) {



};
exports.insertar = function(req, res){

  var user = new User({
    firstName: 'administrador1',
    lastName:'administrador1',
    username: 'admin1',
    password: 'admin1',
    isAdmin:true,
    isApprove:true
  });
  user.save(function (err){
    if (err){
      res.send(err);
    }
    res.json({mensaje: "usuario creado"});
  });

}
