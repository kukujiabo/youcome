'use strict';

angular.module('yocomeApp')
.controller('MenuCtrl', function ($scope, $http) {
  var youcome = window.youcome;

  $scope.ali = '';

  $scope.menus = $('.nav-itm');

  $scope.selectedMenu = undefined;

  /*
   *获取首页菜单
   */
  youcome.Events.trigger('getMenus', $scope, $http, null, function ($scope, result) {
    $scope.menus = result;

    //$('#ali-nav').fadeIn(3000);

    /*
     *获取阿里巴巴链接
     */
    youcome.Events.trigger('getAli', $scope, $http, null, function ($scope, result) {
      $scope.ali = result[0].url;
    });
  });

  $scope.menuSelected = function ($index) {
    var preSelected = $scope.selectedMenu;

    preSelected == undefined ? null : preSelected.removeClass('nav-family-selected').addClass('nav-family');
    
    $scope.selectedMenu = $('#menu-' + $scope.menus[$index]._id).removeClass('nav-family').addClass('nav-family-selected');

  };



});
