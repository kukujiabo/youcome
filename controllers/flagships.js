"use strict";

var Flagship = require("../models/flagship");

var flagships = function () {

};

module.exports = flagships;

flagships.getDisplayFlagships = function (callback) {
  Flagship.getMuti({active: 1}, callback);
};
