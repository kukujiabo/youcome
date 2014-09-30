"use strict";

angular.module("yocomeApp")
.controller("ProductsCtrl", function ($scope ,$http, $routeParams) {
  productBrandList($scope, $http, $routeParams);
  $scope.showProducts = function (that, product) {
    $("#product-brand-image").attr("src", product.imagePath);
    $("#product-brand-title").html(product.name);
    $("#product-brand-desc").html(product.desc);
    suppliesDisplay($scope, $http, product._id);
  };

  $scope.supplySelect = function (supply) {

  };
});

function productBrandList ($scope, $http, $routeParams) {
  $scope.products = [];
  $http({
    url:"/api/products",
    method: "GET"
  }).success(function (products) {
    $scope.products = products;
    var productId = $routeParams.id;
    if (productId == undefined || productId == null) {
      suppliesBrandShow(products[0]);
    } else {

    }
  }).error(function (err) {
    console.log(err);
  })
}

function suppliesDisplay ($scope, $http, productId) {
  $scope.supplies = [];
  $http({
    url: "/api/supplies",
    method: "GET",
    params: {"productId": productId}
  }).success(function (supplies) {
    $scope.supplies = supplies;
  }).error(function (err) {
    console.log(err);
  })
}

function suppliesBrandShow (product) {
  $("#product-brand-image").attr("src", product.imagePath);
  $("#product-brand-desc").html(product.desc);
  $("#product-brand-title").html(product.title);
};
