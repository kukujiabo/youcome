(function (window) {
  //请求商品类别
  var getCatagories = function ($scope, $http, params, callback) {
    $http({
      url: '/api/catas',
      method: 'GET',
      params: params
    }).success(function (result) {
      callback($scope, result)
    }).error(function (err) {
      console.log(err);
    });
  };

  //请求商品品牌
  var getProducts = function ($scope, $http, params, callback) {
    $http({
      url: '/api/products',
      method: 'GET',
      params: params
    }).success(function (result) {
      callback($scope, result);
    }).error(function (err) {
      console.log(err);
    });
  };

  //请求国家
  var getCountries = function ($scope, $http, params, callback) {
    $http({
      url: '/api/countries',
      method: 'GET',
      params: params
    }).success(function (result) {
      callback($scope, result);
    }).error(function (err) {
      console.log(err);
    });
  };

  //请求供应商品
  var getSupplies = function ($scope, $http, params, callback) {
    $http({
      url: '/api/supplies',
      method: 'GET',
      params: params
    }).success(function (result) {
      callback($scope, result);
    }).error(function (err) {
      console.log(err);
    });
  };

  //请求相关文章
  var getArts = function ($scope, $http, params, callback) {
    $http({
      url: '/api/supplies',
      method: 'GET',
      params: params
    }).success(function (result) {
      callback($scope, result);
    }).error(function (err) {
      console.log(err);
    });
  };

  var getAli = function ($scope, $http, params, callback) {
    $http({
      url: '/api/ali',
      method: 'GET',
      params: params
    }).success(function (result) {
      callback($scope, result);
    }).error(function (err) {
      console.log(err);
    });
  };

  window.youcome = {};

  window.youcome.getCatagories = getCatagories;

  window.youcome.getProducts = getProducts;

  window.youcome.getCountries = getCountries;

  window.youcome.getSupplies = getSupplies;

  window.youcome.getAli = getAli;

})(window);
