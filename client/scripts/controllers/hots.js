"use strict";

angular.module("yocomeApp")
.controller("HotCtrl", function ($scope, $http) {
  hotList($scope, $http);

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
