"use strict";

angular.module("yocomeApp")
.controller("AboutCtrl", function ($scope, $http) {
  $scope.introduction = undefined;
  $http({
    "url": "/api/introduction",
    "method": "GET"
  }).success(function (result) {
    $scope.introduction = result[0];
  }).error(function (err) {
    console.log(err);
  });
});
