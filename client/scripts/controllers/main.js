'use strict';
/**
 * @ngdoc function
 * @name flatUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flatUiApp
 */

(function () {
angular.module("yocomeApp")
.controller("MainCtrl", function ($scope, $http) {
  $scope.catas = [];
  $scope.products = {};
  $scope.cataProds = [];
  $scope.mpLine = $('#m-p-line');
  $scope.cuCata = undefined;

  cataList($scope, $http);

  productsList($scope, $http);

  $scope.showSupplies = function (productId) {
    window.location.href="/products?productId=" + productId;
  };

  $scope.productLine = function (cata) {
    console.log($scope.cataProds);

    if ('none' != $scope.mpLine.css('display')) {
      $scope.mpLine.toggle('normal', function () {
        $scope.cataProds = [];
      });

      if ($scope.cuCata == cata._id) {
        return;
      }
    }

    $scope.cuCata = cata._id;

    if ($scope.products[cata._id].length == 0) {
      return;
    }

    if ($scope.products == undefined || $scope.products.length == 0) {
      productsList($scope, $http);
    }

    if ($scope.mpLine.css('display') != 'none') {
      $scope.mpLine.toggle('normal', function () {
        $scope.cataProds = [];
      });
    } else {
      $scope.cataProds = $scope.products[cata._id];
      $scope.mpLine.toggle('normal');
    }
  };
});

function cataList ($scope, $http) {
  $http({
    url: '/api/catas',
    method: 'GET'
  }).success(function (result) {
    $scope.catas = result;
  }).error(function (err) {
    console.log(err);
  });
}

function productsList ($scope, $http) {
  $http({
    url: '/api/products',
    method: 'GET'
  }).success(function (result) {
    if ($scope.catas == undefined || $scope.catas.length == 0) {
      cataList($scope, $http);
    }
    var products = result;
    var catas = $scope.catas;

    for (var i in catas) {
      $scope.products[catas[i]._id] = [];
      for (var j in products) {
        if (catas[i]._id == products[j].cata) {
          $scope.products[catas[i]._id].push(products[j]);
        }
      }
    }
  }).error(function (err) {
    console.log(err);
  });
}

})();
