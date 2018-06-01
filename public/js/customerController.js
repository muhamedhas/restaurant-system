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
        
        // get Reviews/ Bookings for a particular Restaurant
		$scope.getReview = function (result) {
			console.log(result)
			$scope.restaurantId = result._id
			$scope.reviews = result.reviews
			$scope.bookings = result.bookings

			console.log('Reviews present', $scope.reviews)
			$scope.reviewRestaurant = result.name
        }
        
        