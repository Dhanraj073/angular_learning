var app4 = angular.module('app4', []);
 
// Define the Controller and implement the Scope
app4.controller('eventCtrl', function($scope)
 {
  $scope.blur = 0;
  $scope.dbclick= 0;
  $scope.click = 0;
  $scope.copy = 0;
  $scope.cut = 0;
  $scope.paste = 0;
  $scope.focus = 0;
  $scope.change = 0;
  
  //to handle the event of key pressing
  $scope.keydown=function(e){
	$scope.kdkey=String.fromCharCode(e.keyCode);  
  };
  
  $scope.mouseenter=0;
  $scope.mouseleave=0;
  $scope.disableButton=true;
  
  
  $scope.daytimeButton=true;
  $scope.capitals = [
    {"City": "Montgomery",
    "State": "Alabama"},
    {"City": "Juneau",
    "State": "Alaska"},
    {"City": "Phoenix",
    "State": "Arizona"},
    {"City": "Little Rock",
    "State": "Arkansas"}
  ];
  
  
});