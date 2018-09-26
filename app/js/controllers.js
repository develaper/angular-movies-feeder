angular.module('MoviesFeeder.controllers', [])
	.controller('moviesController', function($scope) {
		$scope.moviesList = [
			{
				title:       "first title",
				coverImage:  "http://first_movie/cover_image/url.png",
				description: "first movie description"
			},
			{
				title:       "second title",
				coverImage:  "http://second_movie/cover_image/url.png",
				description: "second movie description"
			}
		];

	});