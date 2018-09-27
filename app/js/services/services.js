angular.module('MoviesFeeder.services', []).
  factory('moviesAPIservice', function($http) {

    var moviesAPI = {};

    moviesAPI.getMovies = function() {
      return $http({
        //method: 'JSONP', 
        method: 'GET', 
        url: 'http://localhost:3000/movies'
      });
    }

    return moviesAPI;
  });