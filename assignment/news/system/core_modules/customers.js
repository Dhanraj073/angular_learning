var mongoose = require("mongoose");
var customerSchema = mongoose.Schema(
	{
		emailId : {type:String, unique:true, required:true},
		orderId : String,
		codeId : String
	});


module.exports = function(){
	return mongoose.model('customer', customerSchema);
}();