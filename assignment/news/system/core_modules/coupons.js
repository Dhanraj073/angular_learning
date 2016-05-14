var mongoose = require("mongoose");
var couponSchema = mongoose.Schema({
		index  : {type:String,required:true},
		codeid : {type:String, required:true},
		status : String,
		expiryDate : String
});


module.exports = function(){
	return mongoose.model('coupon', couponSchema);
}();