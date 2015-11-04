var express = require('express');
var router = express.Router()

var devicesController = require('../controllers/devicesController');


router.get('/', devicesController.list);
router.get('/new', devicesController.new);
router.post('/create', devicesController.create);
router.get('/solicitudalta', devicesController.solicitudalta);

// Route to localize device for a location and a distance around
router.get('/search/:lat/:lon/:distance', devicesController.search);

//router.get('/devices/:id/edit', devicesController.edit);
//router.put('/devices/:id', devicesController.update);
//router.delete('/devices/:id', devicesController.delete);

module.exports = router;
