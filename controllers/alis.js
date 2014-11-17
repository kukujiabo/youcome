'use strict';

var Ali = require('../models/ali');

var ali = function () {

};

module.exports = ali;

ali.getDisplayAli = function (callback) {

  Ali.getMuti({'active': 1}, callback);

};
