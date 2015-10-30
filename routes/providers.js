var express = require('express');
var router = express.Router();

var providersController = require('../controllers/providersController');
//autoload los id
//router.param('providersId', providersController.load);
//definicion de rutas de providers
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/new', providersController.new);
router.post('/create', providersController.create);
/*router.get('/providers/:id', providersController.list);
router.get('/providers/:id/edit', providersController.edit);
router.put('/providers/:id', providersController.update);
router.delete('/providers/:id', providersController.delete);
*/
module.exports = router;
