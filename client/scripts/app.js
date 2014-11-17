"use strict";
var app = angular
.module("yocomeApp", [
  "ngAnimate",
  "ngResource",
  "ngRoute",
  "ngSanitize",
  "ngTouch",
  "ui.bootstrap"
])
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when("/", {
      templateUrl: "views/main.html",
      controller: "MainCtrl"
    })
    .when("/products", {
      templateUrl: "views/products.html",
      controller: "ProductsCtrl"
    })
    .when("/about", {
      templateUrl: "views/about.html",
      controller: "AboutCtrl"
    })
    .when("/contact", {
      templateUrl: "views/contact.html",
      controller: "ContactCtrl"
    })
    .when("/culture", {
      templateUrl: "views/arts.html",
      controller: "ArtsCtrl"
    })
    .when("/shops", {
      templateUrl: "views/flagship.html",
      controller: "FlagshipCtrl"
    })
    .otherwise({
      redirectTo: "/"
    });
});

app.directive('fileUploader', function () {
  return {
    restrict: 'E',
    transclude: true,
    template: '<div><input type="file" multiple /><button ng-click="upload()">Upload</button></div>'
      + '<ul><li ng-repeat="file in files"> - </li></ul>',
    controller: function ($scope, $fileUpload) {
      $scope.ready = false;
      $scope.upload = function () {
        $fileUpload.upload($scope.files);
      };
    },
    /*
     * link the compiled template with scope
     */
    link: function ($scope, $element) {
      var fileInput = $element.find('input[type="file"]');
      fileInput.bind('change', function (e) {
        $scope.ready = !(e.target.files.length == 0);
        $scope.files = [];
        for (var i in e.target.files) {
          if (typeof e.target.files[i] == 'object') {
            $scope.files.push(e.target.files[i]);
          }
        }
      });
    }
  }
});

app.service('$fileUpload', ['$http', function ($http) {
  this.upload = function (files) {
    var formData = new FormData();
    for (var i in files) {
      formData.append('file_' + i, files[i]);
    }
    console.log(formData);
    $http({
      method: 'POST',
      url: '/api/upload',
      data: formData,
      header: {
        'Content-Type': undefined
      },
      transformRequest: angular.identity
    }).success(function (data, status, headers, config) {
      console.log(data);
    }).error(function (err) {
      console.log(err);
    });
  }
}]);
