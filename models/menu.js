'use strict';

var database = require('./db'),
    mongodb = new database(),
    dbName = 'menus';

function Menu (menu) {
  this.name = menu.name;
  this.href = menu.href;
  this.active = menu.active;
  this.ord = menu.ord;
  this.code = menu.code;
  this.target = menu.target;
}

module.exports = Menu;

Menu.prototype.save = function (callback) {
  var menu = {
    name: this.name,
    href: this.href,
    ord: this.ord,
    code: this.ord,
    target: this.target,
    active: this.active 
  };
  mongodb.save(dbName, menu, callback);
};

Menu.get = function (id, callback) {
  mongodb.get(dbName, id, callback);
};

Menu.getMuti = function (query, callback) {
  var conditions = {};
  conditions.fields = {
    _id: 1,
    name: 1,
    href: 1,
    ord: 1,
    code: 1,
    target: 1,
    active: 1 
  };

  conditions.order = {ord: 1};
  mongodb.getMuti(dbName, query, conditions, callback);
};
