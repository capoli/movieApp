(function () {
    'use strict';

    angular.module('movieApp.services', [])
        .service('ConfigService', function () {
            return {
                server: 'https://angularbackend.azurewebsites.net/api'
            };
        });
})();