(function () {
    'use strict';

    angular.module('movieApp.controllers')
        .controller('MovieListCtrl', ['$scope', 'MovieService', function ($scope, MovieService) {
            MovieService.getAll().then(function(movies) {
                $scope.movies = movies;
            });
            $scope.delete = function (id, $index) {
                MovieService.deleteById(id).then(function() {
                    $scope.movies.splice($index, 1);
                });
            };
        }]);
})();