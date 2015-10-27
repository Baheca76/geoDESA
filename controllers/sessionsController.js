// MW de autorización de accesos HTTP restringidos
exports.loginRequired = function(req, res, next){
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
};

// Get /login   -- Formulario de login
exports.new = function(req, res) {
    var errors = req.session.errors || {};
    req.session.errors = {};

    res.render('sessions/new', {errors: errors});
};

// POST /login   -- Crear la sesion si usuario se autentica
exports.create = function(req, res) {
    console.log("Pasaba por aqui");
    var login     = req.body.login;
    var password  = req.body.password;

   var userController = require('./usersController');
        console.log(login);
        console.log(password);
        userController.autenticar(login, password, function(error, user) {

        if (error) {  // si hay error retornamos mensajes de error de sesión
            req.session.errors = [{"message": 'Se ha producido un error: '+ error}];
            res.redirect("/");
            return;
        }

        // Crear req.session.user y guardar campos   id  y  username
        // La sesión se define por la existencia de:    req.session.user
        req.session.user = {id:user.id, username:user.username, isAdmin:user.isAdmin};
        console.log(req.session.user);

        res.redirect("/");// redirección a path anterior a login
    });
};

// DELETE /logout   -- Destruir sesion
exports.destroy = function(req, res) {
    delete req.session.user;
    res.redirect("/"); // redirect a path anterior a login
};
