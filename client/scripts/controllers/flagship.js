"use strict";

angular.module("yocomeApp")
.controller("FlagCtrl", function ($scope, $http) {
  $scope.flags = [];
  getFlagImg($scope, $http);
});

function getFlagImg ($scope, $http) {
  $http({
    "url": "/api/flagship",
    "method": "GET"
  }).success(function (result) {
    $scope.flags = result;
  }).error(function (err) {
    console.log(err);
  });
}
