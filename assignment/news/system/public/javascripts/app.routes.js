var app=angular.module('referralApp');
// providing the views where to redirect and upon which condition to redirect to the pages
app.config(function ($routeProvider) {

	$routeProvider

	.when('/shop', {

		templateUrl: '/views/main.html',
		controller: "MainCtrl"
	})

	.when('/order',{
		templateUrl: '/views/orders.html',
		controller: 'OrderController'
	})
	.otherwise({ redirectTo: '/shop' })
});
