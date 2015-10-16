var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
//<<<<<<< HEAD
  res.render('index', { title: 'geoDESA' });
//=======
  res.render('index', { title: 'geoDESA, project by Vanesa Martín' });
//>>>>>>> 8571293d5b7d7f93dec7dd416b92bf79a8d3accf
});


module.exports = router;
