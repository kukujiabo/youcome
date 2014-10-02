"use strict";

angular
.module("yocomeApp", [
  "ngAnimate",
  "ngResource",
  "ngRoute",
  "ngSanitize",
  "ngTouch",
  "ui.bootstrap"
])
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when("/", {
      templateUrl: "views/main.html",
      controller: "MainCtrl"
    })
    .when("/products", {
      templateUrl: "views/products.html",
      controller: "ProductsCtrl"
    })
    .when("/products/:id", {
      templateUrl: "views/products.html",
      controller: "ProductsCtrl"
    })
    .when("/about", {
      templateUrl: "views/about.html",
      controller: "AboutCtrl"
    })
    .when("/contact", {
      templateUrl: "views/contact.html",
      controller: "ContactCtrl"
    })
    .when("/arts", {
      templateUrl: "views/arts.html",
      controller: "ArtsCtrl"
    })
    .otherwise({
      redirectTo: "/"
    });
});

function AnimaCtrl ($scope, $http) {
  $scope.arts = [];
  $scope.beforeOver = undefined;
  $http({
    url: "/api/arts",
    method: "GET"
  }).success(function (arts) {
    $scope.arts = arts;
  }).error(function (err) {
    console.log(err);
  });

  $scope.showBrandPicture = function (that, art) {
    if ($scope.beforeOver != undefined) {
      $scope.beforeOver.removeClass("active");
    }

    $("#" + art._id).addClass('active');
    $("#brand-pic").css("background-image", "url(" + art.imgPath +  ")");
    $("#brand-desc").html(art.desc);
    $scope.beforeOver = $("#" + art._id);
  }
}
