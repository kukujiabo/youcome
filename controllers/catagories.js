'use strict';

var Catagory = require('../models/catagory');

var catagories = function () {

};

catagories.getDisplayCatas = function (callback) {

  Catagory.getMuti({active: 1}, callback);

};

module.exports = catagories;
