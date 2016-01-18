var express = require('express');
var router = express.Router();

var sessionController = require ('../controllers/sessionsController');

//definicion de rutas de session
router.get('/api', sessionController.sessionsApi); // API Documentation
router.get('/login', sessionController.new); //formulario login
router.post('/login', sessionController.create); //crear session
router.get('/logout', sessionController.destroy); //destruir session

module.exports = router;
