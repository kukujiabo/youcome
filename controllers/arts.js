"use strict";

var Art = require("../models/art");

var art = function () {

};

module.exports = art;

art.getDisplayArts = function (callback) {

  Art.getMuti({active: 1}, callback);

};
