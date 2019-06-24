var express = require('express');
var bodyParser = require('body-parser');
var URL = require('url');
var router = express.Router();

/* GET equipment listing. */
router.post('/new', function(req, res, next) {
	var string = URL.parse(req.url, true);
	//console.log("URL:" + req.url + "  " + string.pathname);
	//解析参数
	var params = req.body;
	var user = {};
	user.name = params.name;
	user.pwd = params.pwd;
	var response = { status: 1, data: user };
	res.send(JSON.stringify(response));
	res.send('post:' + string.pathname + "  " +JSON.stringify(text));
	res.end();
	console.log(req.method);//post
	console.log(req.body);
});
router.get("/timezone", function(req, res) {
    res.send("v2   =   Sample response for /timezone");
});
router.get("/all_timezones", function(req, res) {
    res.send("v2   =   Sample response for /all_timezones");
});


module.exports = router;