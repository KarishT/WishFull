var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/logreg', {
		templateUrl: 'partials/logreg.html'
	})
	.when('/donor', {
		templateUrl: 'partials/donor.html'
	})
	.when('/donee', {
		templateUrl: 'partials/donee.html'
	})
	.otherwise({
		redirectTo: '/logreg'
	})
})
