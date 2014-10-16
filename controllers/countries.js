'use strict';

var Country = require('../models/country');

var countries = function() {

};

module.exports = countries;

countries.getDisplayCountries = function (callback) {
  Country.getMuti({active: 1}, callback);
};
