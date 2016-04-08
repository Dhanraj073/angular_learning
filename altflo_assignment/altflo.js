var app1=angular.module('app1',['ngStorage']);
var user_input;
app1.controller('ctrl1',function($scope,$localStorage)
{
	$scope.first="";
	$scope.second="";
	
	$scope.updateValue=function()
	{
		$scope.calculation=("you entered " + $scope.first + " " + $scope.second);
		alert($scope.calculation);
		user_input=prompt("want to edit? type yes or no ");
		while(user_input==="yes")
		{
			$scope.first=prompt("Enter the first name");
			$scope.second=prompt("Enter the second name");
			$scope.updateValue();
		}
	};

	$scope.save =function(){
		window.localStorage.set("saved",JSON.stringify($scope.first+ " "+ $scope.second));
	}

	$scope.foad=function(){
		$scope.message=JSON.parse(window.localStorage.get("saved"));
	}
	$scope.myfun=function(){
		$scope.first="";
		$scope.second="";
	}
});