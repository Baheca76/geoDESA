var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var user = req.session.user || "";
  var isAdmin = req.session.isAdmin || false;
  var isApprove = req.session.isApprove || false;
  req.session.redir = req.path;
  res.render('index', { title: 'geoDESA, project by Vanesa Martín', session: {user: user, isAdmin: isAdmin,isApprove: isApprove}});
});

router.get('/callcenter', function(req, res, next) {
  var user = req.session.user || "";
  var isAdmin = req.session.isAdmin || false;
  var isApprove = req.session.isApprove || false;
  req.session.redir = req.path;
  res.render('callcenter', { title: 'geoDESA CallCenter, project by Vanesa Martín', session: {user: user, isAdmin: isAdmin,isApprove: isApprove}});
});

module.exports = router;
