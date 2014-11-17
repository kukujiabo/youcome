'use strict';

(function (window) {
  angular.module('yocomeApp')
  .controller('carouselCtrl', function ($scope, $http) {
    var youcome = window.youcome;

    $scope.shops = [];

    $scope.shopGrps = [];

    $scope.currentShop = {};

    $scope.shopInterval = 3000;

    $scope.mp = undefined;

    loadScript();

    /*
     * 获取店铺信息
     */
    youcome.Events.trigger('getShop', $scope, $http, null, function ($scope, shops) {
      $scope.shops = shops;
      var j = -1;
      for (var i = 0; i < shops.length; i++) {
        if (i % 3 == 0)  {
          j ++;
          $scope.shopGrps[j] = [];
        }
        $scope.shopGrps[j].push(shops[i]);
      }
      console.log($scope.shopGrps);
    });

    /*
     * 展示小图片
     */
    $scope.showPic = function (photo) {
      $('#s-l-img').attr('src', '/images/flagship/' + photo);
    };

    /*
     * 显示地图
     */
    $scope.showMap = function () {
      if ($scope.mp == undefined) {
        $scope.mp = new BMap.Map('b-map');
      }

      var bMap = $('#b-map');

      if (bMap.css('display') == 'none') {
        $('#map-trigger').html('收起地图');
        bMap.slideToggle('slow', function () {
          var cuShop = $scope.currentShop;
          var point = new BMap.Point(cuShop.lng, cuShop.lat);
          console.log(point);
          $scope.mp.centerAndZoom(point, 16);
          var marker = new BMap.Marker(point);
          $scope.mp.addOverlay(marker);

          $scope.mp.addControl(new BMap.NavigationControl());
          $scope.mp.addControl(new BMap.ScaleControl());
          $scope.mp.addControl(new BMap.OverviewMapControl());
          $scope.mp.addControl(new BMap.MapTypeControl());
        });
      } else {
        bMap.slideToggle('show', function () {
          $('#map-trigger').html('查看地图');
        });
      }
    };

    /*
     * 显示店铺详情
     */
    $scope.shopDetails = function (shop) {
      $scope.currentShop = shop;
      $('#shop-display').slideToggle('normal', function () {
        $('#shop-detail').slideToggle('normal');
      });
    };

    /*
     * 显示店铺首页
     */
    $scope.shopBrand = function () {
      $('#shop-detail').slideToggle('normal', function () {
        if ($('#b-map').css('display') != 'none') {
          $scope.showMap(); 
        }
        $('#shop-display').slideToggle('normal');
      }) ;
        $scope.showMap();
        $scope.showMap();
    };

  });

  /*
   * 加载百度地图API
   */
  function loadScript() {
    var script = document.createElement("script");
    script.src = "http://api.map.baidu.com/api?v=1.5&ak=7XTgXXqefgTIH3cwTLsbnR7P&callback=showMap";
    document.body.appendChild(script);
  }

})(window);
