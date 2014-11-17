'use strict';

angular.module('yocomeApp')
.controller('SearchCtrl', function ($scope, $http) {
  $scope.searchText = undefined;

  $scope.searchProducts = function () {
    $http({
      url: '/api/search',
      method: 'POST',
      params: {searchText: $scope.searchtext}
    }).success(function (result) {
    
    }).error(function (err) {
      console.log(err); 
    });
  };

});
