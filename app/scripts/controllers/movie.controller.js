(function () {
    'use strict';

    angular.module('movieApp.controllers', [])
        .controller('MovieCtrl', ['$scope', '$state', 'MovieService', function ($scope, $state, MovieService) {
            $scope.searchTitle = function (title) {
                $state.go('movie.search', {title: title});
            };
        }]);
})();