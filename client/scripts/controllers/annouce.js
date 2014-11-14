'use strict';

(function (window) {
angular.module('yocomeApp')
.controller('AnnouceCtrl', function ($scope, $http, $routeParams) {
  var youcome = window.youcome;

  $scope.annoucement = {};

  youcome.Events.trigger('announcement', $scope, $http, null, function ($scope, result) {
    $scope.annoucement = result; 
  });

});

})(window);
