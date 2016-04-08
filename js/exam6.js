var app6=angular.module('app6',[]);

app6.controller('heroCtrl',function($scope,$rootScope){
	
	$scope.hero=[
		{realName: "Bruce Wayne" ,heroName: "Batman"},
		{realName: "Clark Kent", heroName:"Superman"},
	];
	
	$scope.getHeroData = function()
	{
		heroSearch($scope.heroName);
	};
	
	function heroSearch(name){
		$scope.heroData="Not Found";
		for(var i=0;i<$scope.hero.length;i++){
			if($scope.hero[i].heroName===name){
				$scope.heroData= $scope.hero[i].realName + " is "+ $scope.hero[i].heroName;
			}
		}
	}
	
	$scope.$on("heroUpdated",function(event,args){
		console.log("Real : " + args.realName + " Hero : " + args.heroName);
		$scope.hero.push({
			realName:args.realName ,heroName:args.heroName
		});
	});
	
	//when a new hero is added we broadcast the update to other contoller
	$scope.addHeroData=function(realName,heroName){
		$rootscope.$broadcast("heroUpdated",{
		realName: realName , heroName : heroName});
		
		console.log("Real :" + realName + " Hero : "+ heroName);
	};


});
