"use strict";

angular.module("yocomeApp")
.controller("ContactCtrl", function ($scope, $http) {
  contactList($scope, $http);
});

function contactList($scope, $http) {
  $scope.contacts = [];
  $http({
    url: "/api/contacts",
    method: "GET"
  }).success(function (results) {
    $scope.contacts = results;
  }).error(function (err) {
    console.log(err);
  });
}
