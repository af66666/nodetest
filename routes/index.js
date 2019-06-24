var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('Hello');
  var list = ['人工智能','保健食品','辅具用品','养老地产','养老旅游'];
  res.render('index', { title: '米因',tips: 'Welcome to Express!',items: list });

});

module.exports = router;
