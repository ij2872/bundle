var express = require('express');
var router = express.Router();

var action = require('../actions');
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/bundle/:id', function(req, res) {
  // action.print();
  
  // res.json(JSON.stringify(action.getBundle(req.params.id)));
  res.json(action.getBundle(req.params.id));
  
});


module.exports = router;
