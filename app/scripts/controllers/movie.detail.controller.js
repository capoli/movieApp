(function () {
    'use strict';

    angular.module('movieApp.controllers')
        .controller('MovieDetailCtrl', ['$scope', '$stateParams', 'MovieService', function ($scope, $stateParams, MovieService) {
            MovieService.getById($stateParams.id).then(function (movie) {
                $scope.movie = movie;
            });
        }]);
})();