var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' );

var customer = require('../core_modules/customers');
var coupon = require('../core_modules/coupons');
var ind=0;



router.post('/temp',function(req,res,next){
	console.log(req.body);

	customer.create(req.body,function(err,newcust){
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

router.get('/getc',function(req,res,next){
	if(ind<=10)
	ind=ind+1;

	else
	ind=0;
	var val=ind.toString();
	coupon.find({'index': val}).exec(function(err,couponss){
		res.send(couponss);
		
	});
});




/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
