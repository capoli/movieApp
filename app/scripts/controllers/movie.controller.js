(function () {
    'use strict';

    angular.module('movieApp.controllers', [])
        .controller('MovieCtrl', ['$scope', '$state', '$q', 'MovieService', function ($scope, $state, $q, MovieService) {
            $scope.added = 0;
            $scope.deleted = 0;
            $scope.searchTitle = function (title) {
                $state.go('movie.search', {title: title});
            };

            $scope.deleteAll = function () {
                MovieService.getAll().then(function (movies) {
                    angular.forEach(movies, function (obj) {
                        MovieService.deleteById(obj.id).then(function () {
                            $scope.deleted++;
                            console.log('deleted');
                        });
                    });
                });
            };

            $scope.insertAll = function () {
                var alphabet = 'abcdefghijklmnopqrstuvwxyz';
                for (var i = 0; i < alphabet.length; i++) {
                    MovieService.searchByTitle(alphabet[i]).then(function (movies) {
                        angular.forEach(movies, function (obj) {
                            MovieService.addById(obj.id, {}).then(function () {
                                $scope.added++;
                                console.log('added');
                            });
                        });
                    });
                }
            };

            $scope.loop = function () {
                for (var k = 0; k < 100; k++) {
                    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
                    for (var i = 0; i < alphabet.length; i++) {
                        MovieService.searchByTitle(alphabet[i]).then(function (movies) {
                            angular.forEach(movies, function (obj) {
                                MovieService.addById(obj.id, {}).then(function () {
                                    $scope.added++;
                                    console.log('added');
                                    MovieService.deleteById(obj.id).then(function () {
                                        $scope.deleted++;
                                        console.log('deleted');
                                    });
                                });
                            });
                        });
                    }
                }
            };
        }]);
})();