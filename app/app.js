'use strict';

// Declare app level module which depends on views, and components
angular.module('webdev', [
    'ngRoute',
    'ngCookies',
    'webdev.subscribers',
    'webdev.login',
    'webdev.landing',
    'webdev.photos',
    'webdev.portfolio'
]).config(['$locationProvider', '$routeProvider', '$cookiesProvider', function ($locationProvider, $routeProvider, $cookiesProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/'});
}]).run(["$rootScope", "$location", function ($rootScope, $location) {
    $rootScope.$on("$routeChangeSuccess", function (userInfo) {
        console.log(userInfo);
    });

    $rootScope.$on("$routeChangeError", function (event, current, previous, eventObj) {
        if (eventObj.authenticated === false) {
            $location.path("/login");
        }
    });
}]).factory("authenticationService", function ($http, $q, $cookies) {
    var userInfo;

    function login(userName, password) {
        var deferred = $q.defer();

        $http.post("/api/public/oauth/access_token", {
            grant_type: 'client_credentials',
            client_id: userName,
            client_secret: password
        }).then(function (result) {
            userInfo = {
                accessToken: result.data.access_token
            };
            $cookies.put('token', result.data.access_token);
            deferred.resolve(userInfo);
        }, function (error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function getUserInfo() {
        return {access_token: $cookies.get('token')};
    }

    return {
        login: login,
        getUserInfo: getUserInfo
    };
});
