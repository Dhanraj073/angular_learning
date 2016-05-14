var mongoose = require("mongoose");
var orderSchema = mongoose.Schema(
	{
		orderId : String,
		orderAmount : String
	});


module.exports = function(){
	return mongoose.model('order', orderSchema);
}();