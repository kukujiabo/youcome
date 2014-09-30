"use strict";

var Supply = require("../models/supply");

var supplies = function () {

};

module.exports = supplies;

supplies.getDisplaySupplies = function (productId, callback) {
  var query = {};

  query.active = 1;

  if (productId != undefined && productId != null) {
    query.productId = productId;
  }

  Supply.getMuti(query, callback);

};
