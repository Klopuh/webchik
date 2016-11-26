'use strict';

angular.module('webdev.photos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photos', {
    templateUrl: 'photos/photos.html',
    controller: 'PhotosCtrl'
  });
}])

.controller('PhotosCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/public/photos').then(function(response) {
    $scope.photos = response.data;
    console.log(response.data);
  });
}]);