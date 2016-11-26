'use strict';

angular.module('webdev.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', ['$scope', '$http', 'authenticationService', '$location', function ($scope, $http, authenticationService, $location) {
        $scope.login = function (login, password) {
            authenticationService.login(login, password).then(
                function () {
                    alert("OK");
                    $location.path("/subscribers");
                },
                function () {
                    alert("Bad credentials");
                }
            );

        }
    }]);