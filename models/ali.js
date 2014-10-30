var database = require('./db'),
    mongodb = new database(),
    dbName = 'ali';

function Ali (ali) {
  this.url = ali.url;
  this.active = ali.active;
}

module.exports = Ali;

Ali.prototype.save = function (callback) {
  var ali = {
    url: this.url,
    active: this.active
  };
  mongodb.save(dbName, ali, callback);
};

Ali.get = function (id, callback) {
  mongodb.get(dbName, id, callback);
};

Ali.getMuti = function (query, callback) {
  var conditions = {};
  conditions.fields = {
    _id: 1,
    url: 1,
    active: 1
  };

  conditions.order = {'ord': 1};
  mongodb.getMuti(dbName, query, conditions, callback);
};
