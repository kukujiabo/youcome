"use strict";

var Introduction = require("../models/introduction");

var introduction = function () {

};

module.exports = introduction;

introduction.getDisplayIntroduction = function (callback) {

  Introduction.getMuti({"active": 1}, callback);

};
