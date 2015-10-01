(function () {
    'use strict';

    angular.module('movieApp', ['ui.router', 'movieApp.controllers', 'movieApp.services'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/movie/list");

            $stateProvider
                .state('movie', {
                    abstract: true,
                    url: '/movie',
                    templateUrl: 'views/movie.html',
                    controller: 'MovieCtrl'
                })
                .state('movie.list', {
                    url: '/list',
                    templateUrl: 'views/movie.list.html',
                    controller: 'MovieListCtrl'
                })
                .state('movie.search', {
                    url: '/search/:title',
                    templateUrl: 'views/movie.search.html',
                    controller: 'MovieSearchCtrl'
                })
                .state('movie.detail', {
                    url: '/:id',
                    templateUrl: 'views/movie.detail.html',
                    controller: 'MovieDetailCtrl'
                });
        });
})();