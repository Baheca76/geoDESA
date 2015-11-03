var express = require('express');
var router= express.Router();

var usersController = require ('../controllers/usersController');

/* GET users listing. */



router.get('/', usersController.list);//listar todos los usuarios
router.get('/new', usersController.new); //formulario de sign up
router.post('/create', usersController.create);//crear un nuevo usuario
router.get('/insertar',usersController.insertar);
router.get('/solicitudalta', usersController.solicitudalta);
router.delete('/delete/:id', usersController.delete);




module.exports = router;
