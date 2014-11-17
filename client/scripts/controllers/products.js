'use strict';

(function (window) {
angular.module("yocomeApp")
.controller("ProductsCtrl", function ($scope ,$http, $routeParams) {
  var youcome = window.youcome;

  youcome.Events.listen('initSelected', initSelected);

  /*
   *商品种类
   */
  $scope.catas = [];

  /*
   *所有品牌
   */
  $scope.oriProducts = [];

  /*
   *分类品牌
   */
  $scope.cataProducts = {};

  /*
   *所有原产地
   */
  $scope.countries = [];

  /*
   *商品
   */
  $scope.supplies = [];

  /*
   *根据品牌分类供应品
   */
  $scope.prodSupplies = {};

  /*
   *当前选中的国家
   */
  $scope.selectedCountry = null;

  /*
   *当前选中的品种
   */
  $scope.selectedCata = undefined;

  /*
   *当前选中的商品
   */
  $scope.selectedSupply = {};

  /*
   *当前展示的商品列表
   */
  $scope.cuSupplyList = [];

  /*
   *当前选中的产品
   */
  $scope.cuProd = undefined;


  /*
   *选择产品
   */
  $scope.choseProduct = function (product, init) {
    $scope.cuProd = product;
    $scope.cuSupplyList = $scope.prodSupplies[product._id];
    if (init == undefined) {
      $('#product-list').toggle('normal', function () {
        $('#supply-info').toggle('normal');
      });
    } else {
      $('#product-list').hide();
      $('#supply-info').show();
    }
  }


  /*
   *选择原产地
   */
  $scope.choseCountry = function (country) {
    hideSupplies();

    var cuProd,
      i = 0,
      cid = country._id,
      that = $('#h-n-' + cid),
      cata = $scope.selectedCata,
      preObj = $scope.selectedCountry,
      oriProducts = $scope.oriProducts;

    if (preObj != undefined) {
      $('#h-n-' + preObj).removeClass('h-n-i-selected').addClass('h-n-itm');
    }

    if (preObj == cid) {
      $scope.selectedCountry = undefined;
      for (i in oriProducts) {
        cuProd = oriProducts[i];
        if (cuProd.country != cid) {
          if (cata == undefined || cata == cuProd.cata) {
            $('#d-' + cuProd._id).show();
          }
        }
      }
    } else {
      that.removeClass('h-n-itm').addClass('h-n-i-selected');
      $scope.selectedCountry = cid;
      for (i in oriProducts) {
        cuProd = oriProducts[i];
        if (cuProd.country != cid) {
          $('#d-' + cuProd._id).hide();
        } else {
          if (cata == undefined || cata == cuProd.cata) {
            $('#d-' + cuProd._id).show();
          }
        }
      }
    }
  };

  /*
   *选择类目
   */
  $scope.choseCata = function (cata) {
    hideSupplies();

    var cuProd,
      i = 0,
      caid = cata._id,
      that = $('#h-n-' + cata._id),
      preObj = $scope.selectedCata,
      country = $scope.selectedCountry,
      oriProducts = $scope.oriProducts;

    if (preObj != undefined) {
      $('#h-n-' + preObj).removeClass('h-n-i-selected').addClass('h-n-itm');
    }

    if (preObj == caid) {
      $scope.selectedCata = undefined;
      for (i in oriProducts) {
        cuProd = oriProducts[i];
        if (cuProd.cata != caid) {
          if (country == undefined || country == cuProd.country) {
            $('#d-' + cuProd._id).show();
          }
        }
      }
    } else {
      that.removeClass('h-n-itm').addClass('h-n-i-selected');
      $scope.selectedCata = caid;
      for (i in oriProducts) {
        cuProd = oriProducts[i];
        if (caid != cuProd.cata) {
          $('#d-' + cuProd._id).hide();
        } else {
          if (country == undefined || country == cuProd.country) {
            $('#d-' + cuProd._id).show();
          }
        }
      }
    }
  };

  /*
   *获取所有国家
   */
  youcome.Events.trigger('getCountries', $scope, $http, null, function ($scope, result) {
    $scope.countries = result;
  });

  /*
   *获取所有类目
   */
  youcome.Events.trigger('getCatagories', $scope, $http, null, function ($scope, catas) {
    $scope.catas = catas;

    /*
     *获取所有品牌
     */
    youcome.Events.trigger('getProducts', $scope, $http, null, function ($scope, products) {
      $scope.oriProducts = products;
      constructCataProducts(catas, products, $scope);

      /*
       *获取供应品
       */
      youcome.Events.trigger('getSupplies', $scope, $http, null, function ($scope, supplies) {
        $scope.supplies = supplies;
        constructProductSupplies(products, supplies, $scope);

        initSelected($scope, $routeParams);

      });
    });
  });

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

/*
 *构造种类和品牌的分类数组
 */
function constructCataProducts (catas, products, $scope) {
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
}

/*
 *构造品牌和商品的分类数组
 */
function constructProductSupplies (products, supplies, $scope) {
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
}

/*
 *预选函数
 */
function initSelected ($scope, $routeParams) {
  var passCata, passProduct;

  passCata =  $routeParams.cata;
  passProduct = $routeParams.product;

  if (passCata != undefined) {
    for (var i in $scope.catas) {
      if ($scope.catas[i]._id == passCata) {
        $scope.choseCata($scope.catas[i]);
        break;
      }
    }
  } else if (passProduct != undefined) {
    for (var i in $scope.oriProducts) {
      if ($scope.oriProducts[i]._id == passProduct) {
        $scope.choseProduct($scope.oriProducts[i], 1);
        break;
      }
    }
  }
}

})(window);
