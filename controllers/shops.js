'use strict';

var Shop = require('../models/shop');

var shops = function () {

};

module.exports = shops;

shops.getDisplayShops = function (callback) {

  Shop.getMuti({active: 1}, callback);

};

shops.getShopById = function (id, callback) {

  Shop.get(id, callback);

};
