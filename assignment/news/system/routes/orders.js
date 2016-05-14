var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );

var order = require('../core_modules/orders');
var customer = require('../core_modules/customers');
var coupon = require('../core_modules/coupons');

router.post('/',function(req,res,next){
	console.log(req.body);

	order.create(req.body,function(err,newcust){
		if(err)
		{
			console.log(err);
		}
		else
		{
			res.send({"status" : "Ok"});
		}

	});

	

	
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
