"use strict";

var Product = require("../models/product");

var products = function () {

};

module.exports = products;

products.getDisplayProducts = function (callback) {

  Product.getMuti({"active": 1}, callback);

};

products.getProductById = function (productId, callback) {

  Product.get(productId, callback);

};
