'use strict';

angular.module('webdev.portfolio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'portfolio/portfolio.html',
    controller: 'PortfolioCtrl'
  });
}])

.controller('PortfolioCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/public/portfolio/categories').then(function(response) {
    $scope.portfolio_categories = response.data;
    console.log(response.data);
  });

  $http.get('/api/public/portfolio').then(function(response) {
    $scope.portfolio = response.data;
    console.log(response.data);
  });
}]);