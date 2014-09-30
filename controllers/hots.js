"use strict";

var Hot = require("../models/hot");

var hot = function () {

};

module.exports = hot;

hot.getDisplayHots = function (callback) {

  Hot.getMuti({"active": 1}, callback);

};
