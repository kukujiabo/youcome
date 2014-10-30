'use strict';

angular.module('yocomeApp')
.controller('MenuCtrl', function ($scope, $http) {
  var youcome = window.youcome;

  $scope.ali = '';

  youcome.getAli($scope, $http, null, function ($scope, result) {
    console.log(result);
    $scope.ali = result[0].url; 
  });

});
