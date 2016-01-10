var express = require('express');
var router = express.Router();

var providersController = require('../controllers/providersController');
var sessionController = require('../controllers/sessionsController');

//autoload los id
//router.param('providersId', providersController.load);
//definicion de rutas de providers
router.param('providerId', providersController.load);
router.get('/new', providersController.new);
router.post('/create', providersController.create);
//router.get('/',sessionController.loginRequired, providersController.list);
router.get('/', providersController.list);

router.delete('/:providerId', providersController.delete);
router.get('/:providerId', providersController.show);
router.get('/:providerId/edit', providersController.edit);
router.put('/:providerId', providersController.update);
router.get('/api', providersController.providersApi);//API


module.exports = router;
