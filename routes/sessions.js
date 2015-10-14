var express = require('express');
var router = express.Router();

var sessionsController = require ('../controllers/sessionsController');

//definicion de rutas de session

router.get('/login', sessionsController.new); //formulario login
router.post('/login', sessionsController.create);//crear session
router.get('/logout', sessionsController.destroy);//destruir session 


module.exports = router;
