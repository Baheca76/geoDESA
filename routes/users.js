var express = require('express');
var router= express.Router();

var usersController = require ('../controllers/usersController');

router.param('userId', usersController.load);


/* GET users listing. */
router.get('/', usersController.list);//listar todos los usuarios
router.get('/new', usersController.new); //formulario de sign up
router.post('/create', usersController.create);//crear un nuevo usuario
router.get('/insertar',usersController.insertar);
router.get('/solicitudalta', usersController.solicitudalta);
router.put('/update/:userId', usersController.update);
router.delete('/users/:userId', usersController.delete);
router.get('/:userId', usersController.show);



module.exports = router;
