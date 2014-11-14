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
    .when("/about", {
      templateUrl: "views/about.html",
      controller: "AboutCtrl"
    })
    .when("/contact", {
      templateUrl: "views/contact.html",
      controller: "ContactCtrl"
    })
    .when("/culture", {
      templateUrl: "views/arts.html",
      controller: "ArtsCtrl"
    })
    .when("/shops", {
      templateUrl: "views/flagship.html",
      controller: "FlagshipCtrl"
    })
    .otherwise({
      redirectTo: "/"
    });
});
