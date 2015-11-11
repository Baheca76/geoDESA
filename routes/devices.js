var express = require('express');
var router = express.Router()

var devicesController = require('../controllers/devicesController');

router.param('deviceId', devicesController.load);

router.get('/', devicesController.list);
router.get('/new', devicesController.new);
router.post('/create', devicesController.create);
router.get('/solicitudalta', devicesController.solicitudalta);

// Route to localize device for a location and a distance around
router.get('/search/:lat/:lon/:distance', devicesController.search);

router.get('/:deviceId', devicesController.show);
router.delete('/:deviceId', devicesController.delete);
//router.get('/devices/:devicesId/edit', devicesController.edit);
//router.put('/devices/:deviceId', devicesController.update);
//router.delete('/devices/:deviceId', devicesController.delete);

module.exports = router;
