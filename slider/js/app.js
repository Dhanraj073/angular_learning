var app=angular.module('website',['ngAnimate']);

app.controller('MainCtrl',function($scope){
	$scope.slides=[
	{image: 'images/image1.jpg' , description:'Image 1'},
	{image: 'images/image2.jpg' , description:'Image 2'},
	{image: 'images/image3.jpg' , description:'Image 3'},
	{image: 'images/image4.jpg' , description:'Image 4'},
	{image: 'images/image5.jpg' , description:'Image 5'},
	{image: 'images/image6.jpg' , description:'Image 6'}
	];


	$scope.currentIndex=0;
	$scope.setCurrentSlideIndex=function(index){
		$scope.currentIndex=index;
	};

	$scope.isCurrentSlideIndex=function(index){
		return $scope.currentIndex ===index;
	};

	$scope.prevSlide=function(){
		$scope.currentIndex=($scope.currentIndex< $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
	};

	$scope.nextSlide=function(){
		 $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
});

app.animation('.slide-animation',function(){
return{
	addClass: function(element,className,done){
		if(className=='ng-hide'){
			TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
		}
		else{
			done();
		}
	},
	removeClass: function(element,className,done){
		if(className=='ng-hide'){
			element.removeClass('ng-hide');

                    TweenMax.set(element, { left: element.parent().width() });
                    TweenMax.to(element, 0.5, {left: 0, onComplete: done });
		}
		else{
			done();
		}
	}
};
});