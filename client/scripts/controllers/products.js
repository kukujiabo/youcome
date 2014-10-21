'use strict';

(function (window) {
angular.module("yocomeApp")
.controller("ProductsCtrl", function ($scope ,$http, $routeParams) {
  var youcome = window.youcome;

  $scope.oriProducts = [];        //所有产品
  $scope.cataProducts = {};       //分类产品
  $scope.countries = [];          //国家
  $scope.supplies = [];           //供应品
  $scope.prodSupplies = {};       //分类供应品
  $scope.cblocks = [];
  $scope.catas = [];
  $scope.selectedCountries = [];
  $scope.selectedCatas = [];
  $scope.selectedSupply = {};
  $scope.cuSupplyList = [];
  $scope.cuProd = undefined;

  //获取品牌类目
  youcome.getCatagories($scope, $http, null, function ($scope, catas) {
    $scope.catas = catas;   

    //获取所有品牌
    youcome.getProducts($scope, $http, null, function ($scope, products) {
      $scope.oriProducts = products;

      //按类目为品牌归类
      var i, j, caid;

      for (i in catas) {
        caid = catas[i]._id;
        $scope.cataProducts[caid] = [];
        for (j in products) {
          if (caid == products[j].cata) {
            $scope.cataProducts[caid].push(products[j]);
          }
        }
      }

      //获取供应品
      youcome.getSupplies($scope, $http, null, function ($scope, supplies) {
        $scope.supplies = supplies;
          
        //按品牌为供应品分类
        var p, q, pid;

        for (p in products) {
          pid = products[p]._id; 
          $scope.prodSupplies[pid] = [];
          for (q in supplies) {
            if (pid == supplies[q].productId) {
              $scope.prodSupplies[pid].push(supplies[q]);
            }
          }
        }
        console.log($scope.prodSupplies);
      });
    });
  });

  //获取所有国家
  youcome.getCountries($scope, $http, null, function ($scope, result) {
    $scope.countries = result;
  });

  $scope.selectedProduct = function (product) {
    $scope.cuProd = product; 
    $scope.cuSupplyList = $scope.prodSupplies[product._id];
    $('#s-prod-img').attr('src', product.imagePath);
    $('#product-list').toggle('normal', function () {
      $('#supply-info').toggle('normal');
    });
  };

  //选择原产地
  $scope.choseCountry = function (country) {
    hideSupplies();

    var that = $('#h-n-' + country._id);
    var i = 0;
    var cid = country._id;
    var oriProducts = $scope.oriProducts;

    if ((i = $.inArray(cid, $scope.selectedCountries)) >= 0) {
      $scope.selectedCountries.splice(i, 1);
      that.removeClass('h-n-i-selected').addClass('h-n-itm');
      for (var k in oriProducts) {
        var product = oriProducts[k];
        if (product.country != country._id) {
          $('#d-' + product._id).show();
        }
      }
    } else {
      $scope.selectedCountries.push(country._id);
      that.removeClass('h-n-itm').addClass('h-n-i-selected');
      for (var k in oriProducts) {
        var product = oriProducts[k];
        if (product.country != country._id) {
          $('#d-' + product._id).hide();
        }
      }
    }
  };

  //选择类目
  $scope.choseCata = function (cata) {
    hideSupplies();

    var that = $('#h-n-' + cata._id);
    var i = 0;
    var caid = cata._id;
    var oriProducts = $scope.oriProducts;
    var preObj = $scope.selectedCatas.pop();

    if (preObj != undefined) {
      $('#h-n-' + preObj).removeClass('h-n-i-selected').addClass('h-n-itm');
      if (preObj == cata._id) {
        $('.u-l-itm').each(function () {
          var that = $(this);
          if (that.css('display') == 'none') {
            that.show(); 
          }
        });
        return;
      }
    }

    $scope.selectedCatas.push(cata._id);
    that.removeClass('h-n-itm').addClass('h-n-i-selected');
    
    for (var k in oriProducts) {
      var product = oriProducts[k];
      if (product.cata == cata._id) {
        $('#d-' + product._id).show();
      } else {
        $('#d-' + product._id).hide();
      }
    }
  };

});

function hideSupplies () {
  var supplyBlock = $('#supply-info');
  var productList = $('#product-list');

  if (supplyBlock.css('display') != 'none' && productList.css('display') == 'none') {
    supplyBlock.toggle('normal', function () {
      productList.toggle('normal');
    });
  }
}

})(window);
