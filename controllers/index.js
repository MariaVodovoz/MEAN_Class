var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Portfolio' ,
    pageText: 'some text - to be edited '
  });
});

module.exports = router;
