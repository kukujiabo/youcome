"use strict";

(function (window) {
  angular.module("yocomeApp")
  .controller("FlagshipCtrl", function ($scope, $http) {
    var youcome = window.youcome;
    $scope.shops = [];

    youcome.Events.trigger('getShops', $scope, $http, null, function ($scope, shops) {
      $scope.shops = shops;
    });

  });

})(window);
