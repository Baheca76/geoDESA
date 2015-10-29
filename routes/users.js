var express = require('express');
var router= express.Router();

var usersController = require ('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
        res.send("enviado");
});


router.post('/users', usersController.create);//crear un nuevo usuario
router.get('/new', usersController.new); //formulario de sign up
router.post('/create', usersController.create);//crear un nuevo usuario
router.get('/insertar',usersController.insertar);
router.get('/solicitudalta', usersController.solicitudalta);



module.exports = router;
