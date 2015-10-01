(function () {
    'use strict';

    angular.module('movieApp.services')
        .factory('MovieService', ['$q', '$http', 'ConfigService', function ($q, $http, ConfigService) {
            function getAll() {
                var callbacks = {
                    success: function (res) {
                        console.log('getAll');
                        console.log(res.data);
                        return res.data;
                    },
                    error: function () {
                        $q.reject('error: ' + ConfigService.server + '/Movies');
                    }
                };
                return $http.get(ConfigService.server + '/Movies')
                    .then(callbacks.success, callbacks.error);
            }

            function getById(id) {
                var callbacks = {
                    success: function (res) {
                        console.log('getById');
                        console.log(res.data);
                        return res.data;
                    },
                    error: function () {
                        $q.reject('error: ' + ConfigService.server + '/Movies/id');
                    }
                };
                return $http.get(ConfigService.server + '/Movies/' + id)
                    .then(callbacks.success, callbacks.error);
            }

            function deleteById(id) {
                var callbacks = {
                    success: function (res) {
                        console.log('deleteById');
                        console.log(res.data);
                        return res.data;
                    },
                    error: function () {
                        $q.reject('error: ' + ConfigService.server + '/Movies/id');
                    }
                };
                return $http.delete(ConfigService.server + '/Movies/' + id)
                    .then(callbacks.success, callbacks.error);
            }

            function searchByTitle(title) {
                var callbacks = {
                    success: function (res) {
                        console.log('searchByTitle');
                        console.log(res.data);
                        return res.data;
                    },
                    error: function () {
                        $q.reject('error: ' + ConfigService.server + '/Movies/search?title=' + title);
                    }
                };
                return $http.get(ConfigService.server + '/Movies/search?title=' + title)
                    .then(callbacks.success, callbacks.error);
            }

            return {
                getAll: getAll,
                getById: getById,
                deleteById: deleteById,
                searchByTitle: searchByTitle
            }
        }]);
})();