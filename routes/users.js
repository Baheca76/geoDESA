var express = require('express');
var router= express.Router();

var usersController = require ('../controllers/usersController');
var sessionController = require('../controllers/sessionsController');

router.param('userId', usersController.load);


/* GET users listing. */
//router.get('/', sessionController.loginRequired, usersController.list);//listar todos los usuarios
router.get('/', usersController.list);//listar todos los usuarios

router.get('/new', usersController.new); //formulario de creacion de nuevo usuario - API
router.post('/create', usersController.create);//crear un nuevo usuario
router.post('/createSignup', usersController.createSignup);
router.get('/insertar',usersController.insertar);
router.get('/solicitudalta', usersController.solicitudalta);

router.delete('/:userId', usersController.delete);
router.get('/:userId', usersController.show);

router.get('/:userId/edit', usersController.edit);
router.put('/:userId', usersController.update);

router.get('/api', usersController.usersApi);//API



module.exports = router;
