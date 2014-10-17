'use strict';

(function () {
angular.module("yocomeApp")
.controller("ProductsCtrl", function ($scope ,$http, $routeParams) {
  $scope.products = {}; //产品
  $scope.countries = []; //国家
  $scope.cblocks = [];

  countryList($scope, $http);

  $scope.showProducts = function (that, product) {
    var descBlocks = $('.country-desc');
    var did = 'c-w-' + product.country;

    descBlocks.each(function () {
      var that = $(this);
      if (that.attr('id') != did) {
        if (that.css('display') != 'none') {
          that.slideToggle('normal');
        }
      }
    });

    $('#supply-block').show();
    $('#product-brand-image').attr('src', product.imagePath);
    $('#product-brand-title').html(product.name);
    $('#product-brand-desc').html(product.desc);
    suppliesDisplay($scope, $http, product._id);
  };

  $scope.getProductsByCountry = function (country) {
    $scope.cblocks = $('.countries-wrap');
    $scope.descBlocks = $('.country-desc');
    $scope.subMenus = $('.product-block');

    var cid = country._id;
    var infoPrefix = 'c-w-';
    var menuPrefix = 'c-';
    var subMenuPrefix = 'p-';
    var descPrefix= 's-desc-';
    var infoBlock = $('#' + infoPrefix + cid);
    var menuBlock = $('#' + menuPrefix + cid);
    var subMenuBlock = $('#' + subMenuPrefix + cid);
    var descBlock = $('#' + descPrefix + cid);
    var suppliesBlock = $('#supply-block');

    //若$scope.products 没有设置，则先设置其值
    if ($scope.products == undefined || $scope.products.length < 1) {
      productsList($scope, $http)
    }

    if (suppliesBlock.css('display') != 'none') {
      suppliesBlock.slideToggle('fast');
    }

    //当子菜单在显示状态下时，收起子菜单.
    if ('none' != subMenuBlock.css('display')) {
      //收起文字描述
      if (descBlock.css('display') != 'none') {
        descBlock.slideToggle('normal');
      }

      $scope.cblocks.each(function () {
        //商品条目收起完毕后显示国家信息.
        if ($(this).css('display') == 'none') {
          $(this).slideToggle('fast');
        }
      });

    } else {
      //收起非该主菜单下的其他子菜单
      $scope.subMenus.each(function () {
        var that = $(this);
        if (that.attr('id') == subMenuBlock.attr('id')) {
          return;
        } else {
          if (that.css('display') != 'none') {
            that.slideToggle('normal');
          }
        }
      });

      //显示国家描述
      if (infoBlock.css('display') == 'none') {
        infoBlock.slideToggle('normal');
      }

      //显示文字描述
      if (descBlock.css('display') == 'none') {
        descBlock.slideToggle('normal');
      }

      //收起其他国家的描述
      $scope.cblocks.each(function () {
        var that = $(this);
        if (that.attr('id') == infoBlock.attr('id')) {
          return;
        } else {
          if (that.css('display') != 'none') {
            that.slideToggle('normal');
          }
        }
      });

      console.log($scope.descBlocks);
      $scope.descBlocks.each(function () {
        var that = $(this);
        if (that.attr('id') == descBlock.attr('id')) {
          return;
        } else {
          if (that.css('display') != 'none') {
            that.hide();
          }
        }
      });
    }

    subMenuBlock.slideToggle('normal');
  };

  $scope.productLine = function (cata) {

  };

  $scope.supplySelect = function (supply) {

  };

  $scope.showCountry = function () {

  };
});

function productBrandList ($scope, $http, $routeParams) {
  $scope.products = [];
  $http({
    url:"/api/products",
    method: "GET"
  }).success(function (products) {
    $scope.products = products;
    var productId = $routeParams.productId;
    if (productId == undefined || productId == null) {
      suppliesBrandShow(products[0]);
      suppliesDisplay($scope, $http, products[0]._id);
    } else {
      selectedProduct(productId, $http, $scope);
    }
  }).error(function (err) {
    console.log(err);
  })
}

function selectedProduct (productId, $http, $scope) {
  $http({
    "url": "/api/products",
    "method": "GET",
    "params": {"productId": productId}
  }).success(function (result) {
    console.log(result);
    suppliesBrandShow(result);
    suppliesDisplay($scope, $http, result._id);
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
}

function countryList($scope, $http) {
  $scope.countries = [];
  $http({
    url: '/api/countries',
    method: 'GET',
  }).success(function (result) {
    $scope.countries = result;
    productsList($scope, $http);
  }).error(function (err) {
    console.log(err);
  });
}

function productsList($scope, $http) {
  var countries = $scope.countries;
  $http({
    url: '/api/products',
    method: 'GET'
  }).success(function (result) {
    for(var ct in countries) {
      var cid = countries[ct]._id;
      var products = result;
      var product = undefined;
      $scope.products[cid] = [];
      for (var pd in products) {
        product = products[pd];
        if (product.country == cid) {
          $scope.products[cid].push(products[pd]);
        }
      }
    }
  }).error(function (err) {
    console.log(err);
  });
}
})();
