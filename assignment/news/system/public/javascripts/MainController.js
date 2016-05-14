angular.module('referralApp',['ngRoute'])
	.controller('MainCtrl',["$http","$scope","$location",function($http,$scope,$location){
		
		$scope.codes;
		$scope.user={};
		$scope.showform=function()
		{
			document.getElementById('loginForm').style.display = "block";
		};
		$scope.getcoupon=function()
		{
			$http.get('/getc')
			.success(function(data)
			{
				$scope.coupon=data[0].codeid;
				console.log(data[0].codeid);
			})
		};
		$scope.submit=function()
		{
			$scope.user.orderId="";
			$scope.user.codeId="";
			$http.post('/temp',$scope.user).success(function(data)
			{
				console.log(data);
				$scope.user.emailId="";
				$location.path('/order');
			});
		}
}]);
	


