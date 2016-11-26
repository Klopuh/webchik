'use strict';

angular.module('webdev.landing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'landing/landing.html',
    controller: 'LandingCtrl'
  });
}])

.controller('LandingCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/public/photos').then(function(response) {
    $scope.photos = response.data;
    console.log(response.data);
  });

  $http.get('/api/public/portfolio/categories').then(function(response) {
    $scope.portfolio_categories = response.data;
    console.log(response.data);
  });

  $http.get('/api/public/portfolio').then(function(response) {
    $scope.portfolio = response.data;
    console.log(response.data);
  });

  $scope.subscribe = function(email) {
    $http.post('/api/public/subscribe', {email: email}).then(function(response) {
      alert('Thank you!');
    });
  }
}]);