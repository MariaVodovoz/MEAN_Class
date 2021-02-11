var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Project Tracker' ,
    pageText: 'Here is some  dynamic  info from  the controller'
  });
});

module.exports = router;
