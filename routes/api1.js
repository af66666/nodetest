var express = require('express');
var bodyParser = require('body-parser');
var URL = require('url');
var router = express.Router();

/* GET equipment listing. */
router.get('/new', function(req, res, next) {
	//localhost:3000/v1/new?name=zhouyiyi&pwd=123123
    var string = URL.parse(req.url, true);
    //解析参数
    var params = URL.parse(req.url, true).query;
    console.log(params);
    var user = {};
    user.name = params.name;
    user.pwd = params.pwd;
    var responseJson = { name: 'abc', pwd: '123' };
    var response = { status: 2, data: user };
    res.send(JSON.stringify(response));
    console.log("URL:" + req.url + "  " + string.pathname);
    res.status(200).json(response);
});
router.get("/timezone", function(req, res) {
    //res.send("Sample response for /timezone");
    //var obj = {"status":1,"data":[{"user_id":"4","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopoluGszdNCSQxlNhkxsEMv5tkoJIz4jof69ibgiaJNQHvcWk9LJnelJZGJ3rRSW7IGiczt6hgR092g/132","name":"吴金亮","message":"待机时间","time":"2019/05/27 17:15"},{"user_id":"4","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopoluGszdNCSQxlNhkxsEMv5tkoJIz4jof69ibgiaJNQHvcWk9LJnelJZGJ3rRSW7IGiczt6hgR092g/132","name":"吴金亮","message":"方法","time":"2019/05/27 17:15"},{"user_id":"1","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL4jnwQhhibicA7XXzVaeDYXEPS59GLnpEP01MKOibfW5nGvwps4YTJgM3D1LxyP77tkSf8xdzwdawOA/132","name":"阿飞","message":"晴天","time":"2019/05/28 09:27"},{"user_id":"4","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopoluGszdNCSQxlNhkxsEMv5tkoJIz4jof69ibgiaJNQHvcWk9LJnelJZGJ3rRSW7IGiczt6hgR092g/132","name":"吴金亮","message":"顺便买好吧","time":"2019/05/28 09:28"},{"user_id":"4","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopoluGszdNCSQxlNhkxsEMv5tkoJIz4jof69ibgiaJNQHvcWk9LJnelJZGJ3rRSW7IGiczt6hgR092g/132","name":"吴金亮","message":"好的","time":"2019/05/28 10:11"},{"user_id":"4","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopoluGszdNCSQxlNhkxsEMv5tkoJIz4jof69ibgiaJNQHvcWk9LJnelJZGJ3rRSW7IGiczt6hgR092g/132","name":"吴金亮","message":"号","time":"2019/05/28 10:13"},{"user_id":"4","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopoluGszdNCSQxlNhkxsEMv5tkoJIz4jof69ibgiaJNQHvcWk9LJnelJZGJ3rRSW7IGiczt6hgR092g/132","name":"吴金亮","message":"来","time":"2019/05/28 10:14"},{"user_id":"4","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopoluGszdNCSQxlNhkxsEMv5tkoJIz4jof69ibgiaJNQHvcWk9LJnelJZGJ3rRSW7IGiczt6hgR092g/132","name":"吴金亮","message":"我","time":"2019/05/28 10:19"},{"user_id":"4","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopoluGszdNCSQxlNhkxsEMv5tkoJIz4jof69ibgiaJNQHvcWk9LJnelJZGJ3rRSW7IGiczt6hgR092g/132","name":"吴金亮","message":"你","time":"2019/05/28 10:30"},{"user_id":"4","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopoluGszdNCSQxlNhkxsEMv5tkoJIz4jof69ibgiaJNQHvcWk9LJnelJZGJ3rRSW7IGiczt6hgR092g/132","name":"吴金亮","message":"1","time":"2019/05/28 11:15"},{"user_id":"4","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopoluGszdNCSQxlNhkxsEMv5tkoJIz4jof69ibgiaJNQHvcWk9LJnelJZGJ3rRSW7IGiczt6hgR092g/132","name":"吴金亮","message":"好","time":"2019/05/28 11:16"},{"user_id":"4","avatar":"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eopoluGszdNCSQxlNhkxsEMv5tkoJIz4jof69ibgiaJNQHvcWk9LJnelJZGJ3rRSW7IGiczt6hgR092g/132","name":"吴金亮","message":"4","time":"2019/05/28 11:16"}],"msg":"找到了！"};
    res.send({user:"toto"})
});
router.get("/all_timezones", function(req, res) {
    res.send("Sample response for /all_timezones");
});

module.exports = router;