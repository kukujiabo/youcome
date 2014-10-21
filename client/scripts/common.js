(function (window) {
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

  window.youcome = {};

  window.youcome.getCatagories = getCatagories;

  window.youcome.getProducts = getProducts;

  window.youcome.getCountries = getCountries;

  window.youcome.getSupplies = getSupplies;

})(window);
