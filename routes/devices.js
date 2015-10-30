var express = require('express');
var router = express.Router()

var devicesController = require('../controllers/devicesController');
//autoload los id
//router.param('deviceId', devicesController.load);
//definicion de rutas de devices

router.get('/', function(req, res, next) {
  res.send("enviado");
});
router.get('/new', devicesController.new);
router.post('/create', devicesController.create);

router.get('/solicitudalta', devicesController.solicitudalta);
//router.get('/devices/:id', devicesController.list);
//router.get('/devices/:id/edit', devicesController.edit);
//router.put('/devices/:id', devicesController.update);
//router.delete('/devices/:id', devicesController.delete);

module.exports = router;
