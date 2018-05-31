var app = angular.module('serviceModule', [])

// restaurantService
app.service('restaurantService', ['$http', function ($http) {
	var baseUrl = 'http://localhost:3000'


	// list of All Restaurants
	this.listRestaurants = function (id) {
		return $http({
			method: 'GET',
			url: (id) ? baseUrl + '/restaurants/' + id : baseUrl + '/restaurants'
		})
	}
