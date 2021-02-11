var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Response from root of User controller');
});


// GET/ about

router.get('/about', (req, res, next) => {
  res.render('about',{title:'About this Site'} )
})
module.exports = router;
