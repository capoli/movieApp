(function () {
    'use strict';

    angular.module('movieApp.controllers', [])
        .controller('MovieCtrl', ['$scope', '$state', 'MovieService', function ($scope, $state, MovieService) {
            $scope.searchTitle = function (title) {
                $state.go('movie.search', {title: title});
            };

            $scope.deleteAll = function () {
                MovieService.getAll().then(function(movies) {
                    angular.forEach(movies, function (obj) {
                        MovieService.deleteById(obj.id);
                    });
                });
            };

            $scope.insertAll = function () {
                var alphabet = 'abcdefghijklmnopqrstuvwxyz';
                for (var i = 0; i < alphabet.length; i++) {
                    MovieService.searchByTitle(alphabet[i]).then(function (movies) {
                        angular.forEach(movies, function (obj) {
                            MovieService.addById(obj.id, {}).then(function (res) {
                                console.log('added');
                            });
                        });
                    });
                }
            };
        }]);
})();