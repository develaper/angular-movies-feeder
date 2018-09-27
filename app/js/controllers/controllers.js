angular.module('MoviesFeeder.controllers', [])
	.controller('moviesController', function($scope, moviesAPIservice) {
		$scope.nameFilter = '';
		$scope.moviesList = [];

		moviesAPIservice.getMovies().success(function (response) {
	        $scope.moviesList = response;
	    });

	});