'use strict';

(function (window) {
  angular.module('yocomeApp')
  .controller('carouselCtrl', function ($scope, $http) {
    var youcome = window.youcome;
  
    $scope.shops = [];
  
    $scope.shopGrps = [];
  
    $scope.currentShop = {};
  
    $scope.shopInterval = 3000;
  
    /*
     * 获取店铺信息
     */
    youcome.Events.trigger('getShop', $scope, $http, null, function ($scope, shops) {
      $scope.shops = shops; 
      var j = 0;
      for (var i = 0; i < shops.length; i++) {
        if (i % 3 == 0)  {
          j ++;
          $scope.shopGrps[j] = [];
        }
        $scope.shopGrps[j].push(shops[i]);
      }
  
      $scope.currentShop = shops[0];
    });
  
    /*
     * 展示小图片
     */
    $scope.showPic = function (photo) {
      $('#s-l-img').attr('src', '/images/flagship/' + photo);
    };
  });

})(window);
