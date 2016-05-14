angular.module('referralApp')
	.controller("OrderController",["$http","$scope" ,function($http,$scope){
		$scope.data={};
		$scope.data.orderId;
		$scope.data.orderAmount;
		$scope.$on('$viewContentLoaded', function() 
		{
			$scope.data.orderAmount = Math.floor((Math.random()*10000));
    		$scope.data.orderId = Math.floor((Math.random()*10000000));
		});
		$scope.submit=function()
		{
			$http.post('/order',$scope.data).
			success(function(data)
			{
				console.log(data);	
			});
		};
		
	}]);