var app = angular.module('customerModule', ['serviceModule'])

app.controller('customerCtrl', ['$scope', 'customerService', function ($scope, customerService) {

	// search Restaurant based on Name/ Location/ Cuisine
	$scope.search = function () {
		console.log('search function reached...')

		$scope.searchedResults = []
		customerService.findRestaurants($scope.searchName).then(function (success) {
			$scope.searchedResults = success.data
		})

		$scope.reviewRestaurant = ''
		$scope.restaurantId = ''
		$scope.reviews = []

		$scope.bookings = []