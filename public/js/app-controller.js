var app = angular.module('app', ['serviceModule', 'controllerModule', 'customerModule', 'ngRoute'])


app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "../pages/home.html"
		})
		.when("/restaurant", {
			templateUrl: "../pages/restaurants.html",
			controller: 'restaurantCtrl'

		})
		.when("/reservation", {
			templateUrl: "../pages/reservation.html",
			controller: 'customerCtrl'
		})
		.when('/editrestaurant', {
			templateUrl: "../pages/editRestaurant.html"
		})
})