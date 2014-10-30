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
  $scope.selectedCountry = null;
  $scope.selectedCata = undefined;
  $scope.selectedSupply = {};
  $scope.cuSupplyList = [];
  $scope.cuProd = undefined;

  //选择产品;
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

  //选择原产地
  $scope.choseCountry = function (country) {
    hideSupplies();

    var i = 0;
    var cid = country._id;
    var that = $('#h-n-' + cid);
    var cata = $scope.selectedCata;
    var preObj = $scope.selectedCountry;
    var oriProducts = $scope.oriProducts;

    if (preObj != undefined) {
      $('#h-n-' + preObj).removeClass('h-n-i-selected').addClass('h-n-itm');
    }

    if (preObj == cid) {
      $scope.selectedCountry = undefined;
      for (i in oriProducts) {
        var cuProd = oriProducts[i];
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
        var cuProd = oriProducts[i];
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

  //选择类目
  $scope.choseCata = function (cata) {
    hideSupplies();

    var i = 0;
    var caid = cata._id;
    var that = $('#h-n-' + cata._id);
    var preObj = $scope.selectedCata;
    var country = $scope.selectedCountry;
    var oriProducts = $scope.oriProducts;

    if (preObj != undefined) {
      $('#h-n-' + preObj).removeClass('h-n-i-selected').addClass('h-n-itm');
    }

    if (preObj == caid) {
      $scope.selectedCata = undefined;
      for (i in oriProducts) {
        var cuProd = oriProducts[i];
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
        var cuProd = oriProducts[i];
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

  //获取所有国家
  youcome.getCountries($scope, $http, null, function ($scope, result) {
    $scope.countries = result;
  });

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

        var passCata = $routeParams.cata;
        var passProduct = $routeParams.product;
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

})(window);
