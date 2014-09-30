"use strict";
/**
 * @ngdoc function
 * @name flatUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flatUiApp
 */
angular.module("yocomeApp")
.controller("MainCtrl", function ($scope, $http) {
  hotList($scope, $http);
  $scope.showSupplies = function (productId) {
    window.location.href="/products";
  };
});

function hotList ($scope, $http) {
  $scope.hots = [];
  $http({
    url: "/api/hots",
    method: "GET"
  }).success(function (results) {
    $scope.hots = results;
  }).error(function (err) {
    console.log(err);
  });
}

