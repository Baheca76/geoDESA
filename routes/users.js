var express = require('express');
var router= express.Router();

var usersController = require ('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {

        res.send("enviado");


});

//formulario de sign up
router.get('/new', function(req, res, next){
  res.render('users/new');
});

//router.post('/users', usersController.create);//crear un nuevo usuario

module.exports = router;
