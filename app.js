var myApp = angular.module('myApp',['ngRoute']);


myApp.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl : 'views/first.html',
		controller : 'mainController'
	})
	.when('/second',{
		templateUrl : 'views/second.html',
		controller : 'secondController'
	}).when('/second/:num',{
		templateUrl : 'views/second.html',
		controller : 'secondController'
	});
});


myApp.controller('mainController',['$scope','$log','$location',function($scope,$log,$location){
	$log.info($location.path());
	$scope.person = {
		name: "Manoj saini",
		address: "Alwar, Rajasthan"
	}

}]);

myApp.controller('secondController',['$scope','$log','$location','$routeParams',function($scope,$log,$location,$routeParams){
	$log.info($location.path());
}]);
