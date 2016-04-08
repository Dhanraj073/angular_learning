var app5=angular.module('app5',[]);

app5.controller('gListCtrl',function($scope){

	$scope.groceries=[
	{item:"tomatoes" ,purchased:false},
	{item:"potatoes" ,purchased:false},
	{item:"bread" ,purchased:false},
	{item:"hummus" ,purchased:false}];

	$scope.addItem=function(newItem){
	if(!(newItem==undefined) || (newItem==""))
	{
		$scope.groceries.push({
		item:newItem,purchased:false
		});
		$scope.missingNewItemError = "";
	}
	else
	$scope.missingNewItemError="Please Enter an Item";
};
});

app5.controller('userCtrl', function($scope) {

  $scope.user= [{
    fName: "Rahul",
    lName: "Kumar",
    street: "262 Bh-3",
    subscribe: "Subscribe",
    delivery: "Email"
  }];

  $scope.saveUser = function(userInfo) 
  {
		if($scope.userForm.$valid) 
		{
			$scope.user.push({
			fName: userInfo.fName, lName: userInfo.lName, street: userInfo.street, subscribe: userInfo.subscribe, delivery: userInfo.delivery
			});
			console.log('User Saved');
		} 
		else
		console.log('Error : Couldn\'t Save User');
	}
});