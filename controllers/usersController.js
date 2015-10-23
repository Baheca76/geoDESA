var models = require('../models/usersModels.js');


// MW que permite acciones solamente si el usuario objeto corresponde con el usuario logeado o si es cuenta admin
exports.ownershipRequired = function(req, res, next){

};

// Autoload :id
exports.load = function(req, res, next, userId) {

};

// Comprueba si el usuario esta registrado en users
// Si autenticación falla o hay errores se ejecuta callback(error).
exports.autenticar = function(login, password, callback) {

};


// GET /user/:id/edit
exports.edit = function(req, res) {
  res.render('user/edit', { user: req.user, errors: []});
};            // req.user: instancia de user cargada con autoload

// GET /user
exports.new = function(req, res) {
    //var user = models.User.build( // crea objeto user
      //  {username: "", password: ""}
    //);
    res.render('users/new', {user: "", errors: [], title : "Nuevo usuario"});


};

// POST /user
exports.create = function(req, res) {

};

// PUT /user/:id
exports.update = function(req, res, next) {

};

// DELETE /user/:id
exports.destroy = function(req, res) {

};
