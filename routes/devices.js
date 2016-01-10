var express = require('express');
var router = express.Router();

var devicesController = require('../controllers/devicesController');
var sessionController = require('../controllers/sessionsController');

router.param('deviceId', devicesController.load);

router.get('/', sessionController.loginRequired, devicesController.list);
router.get('/new', devicesController.new);
router.post('/create', devicesController.create);
router.get('/solicitudalta', devicesController.solicitudalta);

// Route to localize device for a location and a distance around
router.get('/search/:lat/:lon/:distance', devicesController.search);

//router.get('/:deviceId', sessionController.loginRequired, devicesController.show);
router.get('/:deviceId', devicesController.show);
router.delete('/:deviceId', devicesController.delete);
router.get('/:deviceId/edit', devicesController.edit);
router.put('/:deviceId', devicesController.update);

router.post('/createTemp', devicesController.createTemp);

// ROUTES to manage revisions
router.get('/:deviceId/revisions', devicesController.listRevisions);
router.get('/:deviceId/revisions/new', devicesController.newRevision);
router.get('/:deviceId/revisions/:revisionId/edit', devicesController.editRevision);
router.put('/:deviceId/revisions/:revisionId', devicesController.updateRevision);
router.delete('/:deviceId/revisions/:revisionId', devicesController.deleteRevision);
router.post('/:deviceId/revisions/:revisionId', devicesController.createRevision);

// ROUTES to manages registries
router.get('/:deviceId/registries', devicesController.listRegistries);
router.get('/:deviceId/registries/new', devicesController.newRegistry);
router.get('/:deviceId/registries/:registryId/edit', devicesController.editRegistry);
router.put('/:deviceId/registries/:registryId', devicesController.updateRegistry);
router.delete('/:deviceId/registries/:registryId', devicesController.deleteRegistry);
router.post('/:deviceId/registries/:registryId', devicesController.createRegistry);

router.get('/api', devicesController.devicesApi);//API


module.exports = router;
