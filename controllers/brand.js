var Brand = require("../models/brand");

var brand = function () {

};

module.exports = brand;

brand.getDisplayBrand = function (callback) {

  Brand.getMuti({active: 1}, callback);

};


