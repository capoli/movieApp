(function () {
    'use strict';

    angular.module('movieApp.controllers')
        .controller('MovieSearchCtrl', ['$scope', '$stateParams', 'MovieService', function ($scope, $stateParams, MovieService) {
            MovieService.searchByTitle($stateParams.title).then(function (movies) {
                $scope.moviesFound = movies;
                $scope.searchedTitle = $stateParams.title;
            });
        }]);
})();