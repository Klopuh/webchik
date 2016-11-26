'use strict';

angular
    .module('webdev.subscribers', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/subscribers', {
            templateUrl: 'subscribers/subscribers.html',
            controller: 'SubscribersCtrl',
            resolve: {
                auth: ["$q", "authenticationService", function ($q, authenticationService) {
                    var userInfo = authenticationService.getUserInfo();

                    if (userInfo) {
                        return $q.when(userInfo);
                    } else {
                        return $q.reject({authenticated: false});
                    }
                }]
            }
        });
    }])
    .controller('SubscribersCtrl', ['$scope', '$http', 'authenticationService', function ($scope, $http, authenticationService) {
        console.log(authenticationService.getUserInfo());
        $http({
            url: '/api/public/subscriptions',
            method: "GET",
            params: authenticationService.getUserInfo()
        })
            .then(function (response) {
                $scope.subscribers = response.data;
                console.log(response.data);
            });
    }]);