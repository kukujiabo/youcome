'use strict';

var Menu = require('../models/menu');

var menus = function () {

};

menus.getDisplayMenus = function (callback) {

  Menu.getMuti({active: 1, code: 'official-nav'}, callback);

};

module.exports = menus;
