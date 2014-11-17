(function (window) {
  var youcome = window.youcome = {};

  var Events = {
    /*
     *订阅者列表
     */
    list: {},

    /*
     *订阅方法
     */
    listen: function (key, eventFn) {
      var _self = this, stack, _ref;
      stack = (_ref =  _self.list[key]) == undefined ? _self.list[key] = [] : _ref;
      return stack.push(eventFn);
    },

    /*
     *此事件只能触发一个函数
     */
    one: function (key, eventFn) {
      var _self = this;
      _self.remove(key);
      return _self.listen(key, eventFn);
    },

    /*
     *删除事件
     */
    remove: function (key) {
      var _self = this, _ref;
      return (_ref = _self.list[key]) == undefined ? 0 : _ref.length = 0;
    },

    /*
     *触发事件
     */
    trigger: function () {
      var _self = this;
      var fn, stack, _i, _len, _ref, key;
      key = Array.prototype.shift.call(arguments);
      stack = (_ref = _self.list[key]) == undefined ? _self.list[key] = [] : _ref;
      for (_i = 0, _len = stack.length; _i < _len; _i++) {
        fn = stack[_i];
        if (fn.apply(_self, arguments) === false) {
          return false;
        }
      }
    }
  };

  youcome.Events = Events;

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

  youcome.getCatagories = getCatagories;
  youcome.Events.one('getCatagories', getCatagories);

  /*
   * 请求商品品牌
   */
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

  youcome.getProducts = getProducts;
  youcome.Events.one('getProducts', getProducts);

  /*
   * 请求国家
   */
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

  youcome.getCountries = getCountries;
  youcome.Events.one('getCountries', getCountries);

  /*
   * 请求供应商品
   */
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

  youcome.getSupplies = getSupplies;
  youcome.Events.one('getSupplies', getSupplies);

  /*
   * 请求相关文章
   */
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

  youcome.getArts = getArts;
  youcome.Events.one('getArts', getArts);

  /*
   * 获取阿里店铺的链接
   */
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

  youcome.Events.one('getAli', getAli);

  /*
   * 获取公告
   */
  var annoucement = function ($scope, $http, params, callback) {
    $http({
      url: '/api/annoucement',
      method: 'GET',
      params: params
    }).success(function (result) {
      callback($scope, result);
    }).error(function (err) {
      console.log(err);
    });
  };

  youcome.Events.one('getAnnoucement', annoucement);

  /*
   *获取店铺
   */
  var getShop = function ($scope, $http, params, callback) {
    $http({
      url: '/api/shops',
      method: 'GET',
      params: params
    }).success(function (result) {
      callback($scope, result);
    }).error(function (err) {
      console.log(err);
    });
  };

  youcome.Events.one('getShop', getShop);

  /*
   *获取菜单
   */
  var getMenus = function ($scope, $http, params, callback) {
    $http({
      url: '/api/menus',
      method: 'GET',
      params: params
    }).success(function (result) {
      callback($scope, result);
    }).error(function (err) {
      console.log(err);
    });
  };

  youcome.Events.one('getMenus', getMenus);

  /*
   *获取店铺标题照片
   */
  var getFlagship = function ($scope, $http, params, callback) {
    $http({
      url: '/api/flagship',
      method: 'GET',
      params: params
    }).success(function (result) {
      callback($scope, result);
    }).error(function (err) {
      console.log(err);
    });
  };

  youcome.Events.one('getFlagship', getFlagship);

})(window);
