var express = require('express');

// var app=express();

var router = express.Router();

var apiData= require('../db.json');

// //设置跨域访问
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     //res.header("X-Powered-By",' 3.2.1')
//     //res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });


router.get('/:name', function(req, res) {

	if(apiData[req.params.name]){
	 res.json(apiData[req.params.name])
	}else{
		res.send("no such apiname")
	}
    
});

router.post('/:name', function(req, res) {
    if(apiData[req.params.name]){
	 res.json(apiData[req.params.name])
	}else{
		res.send("no such apiname")
	}
});

module.exports = router;