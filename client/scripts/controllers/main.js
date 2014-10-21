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

  $scope.brandLeave = function () {
    var brand = $('#m-p-line');
    if (brand.css('display') != 'none') {
      brand.toggle('normal');
    }

    $('.circle-brand-over').removeClass('circle-brand-over').addClass('circle-brand');
  }

  $scope.brandOver = function (cata) {
    var brand = $('#m-p-line');

    var img = $('#ic-' + cata._id);
    
    $('.circle-brand-over').removeClass('circle-brand-over').addClass('circle-brand');
    
    img.removeClass('circle-brand').addClass('circle-brand-over');

    if ($scope.products[cata._id] == undefined) {
      productsList($scope, $http, function () {
        $scope.productLine(cata); 
      });
      return;
    } else {
      $scope.cataProds = $scope.products[cata._id];
      if (brand.css('display') == 'none') {
        brand.toggle('normal');
      }
    }

    //if ($scope.cuCata == cata._id) {
      //brand.toggle('normal');
      //return;
    //} else {
      //$scope.cuCata = cata._id;
      //if ($scope.products[cata._id] == undefined) {
        //productsList($scope, $http, function () {
        //});
        //return;
      //}

      //if (brand.css('display') == 'none') {
        //$scope.cataProds = $scope.products[cata._id];
        //brand.toggle('normal');
      //} else {
        //$scope.cataProds = $scope.products[$scope.cuCata];
      //}
    //}
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

function productsList ($scope, $http, callback) {
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

    if (typeof(callback) == 'function') {
      callback();
    }

  }).error(function (err) {
    console.log(err);
  });
}

})();
