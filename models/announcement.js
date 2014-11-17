'use strict';

var database = require('./db'),
    mongodb = new database(),
    dbName = 'annoucements';

function Announcement (announcement) {
  this.title = announcement.title;
  this.content = announcement.content;
  this.date = announcement.date;
  this.addr = announcement.addr;
  this.active = announcement.active;
}

module.exports = Announcement;

Announcement.prototype.save = function (callback) {
  var announcement = {
    title: this.title,
    content: this.content,
    date: this.date,
    addr: this.addr,
    active: this.active
  };
  mongodb.save(dbName, annoucement, callback);
};

Announcement.get = function (id, callback) {
  mongodb.get(dbName, id, callback);
};

Announcement.getMuti = function (query, callback) {
  var conditions = {};
  conditions.fields = {
    _id: 1,
    title: 1,
    content: 1,
    date: 1,
    addr: 1,
    active: 1
  };

  conditions.order = {'_id': 1};
  mongodb.getMuti(dbName, query, conditions, callback);
};
