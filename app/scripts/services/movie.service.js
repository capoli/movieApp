(function () {
    'use strict';

    angular.module('movieApp.services')
        .factory('MovieService', ['$q', '$http', 'ConfigService', function ($q, $http, ConfigService) {
            function getAll() {
                var callbacks = {
                    success: function (res) {
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
                        return res.data;
                    },
                    error: function () {
                        $q.reject('error: ' + ConfigService.server + '/Movies/search?title=' + title);
                    }
                };
                return $http.get(ConfigService.server + '/Movies/search?title=' + title)
                    .then(callbacks.success, callbacks.error);
            }

            function addById(id, post) {
                var callbacks = {
                    success: function (res) {
                        return res.data;
                    },
                    error: function () {
                        $q.reject('error: ' + ConfigService.server + '/Movies/' + id);
                    }
                };
                return $http.post(ConfigService.server + '/Movies/' + id, post)
                    .then(callbacks.success, callbacks.error);
            }

            return {
                getAll: getAll,
                getById: getById,
                deleteById: deleteById,
                searchByTitle: searchByTitle,
                addById: addById
            }
        }]);
})();