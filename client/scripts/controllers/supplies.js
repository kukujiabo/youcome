"use strict";

angular.module("yocome")
.controller("SuppliesCtrl", function () {
  suppliesList($scope, $http);

});

function suppliesList($scope, $http) {
  $scope.supplies = [];
  $http({
    url: "/api/supplies",
    method: "GET"
  }).success(function (result) {
    $scope.supplies = result; 
  }).error(function (err) {
    console.log(err); 
  });

}

function showSupplies(productId) {
  window.location.href = "/products:" + productId;

}
