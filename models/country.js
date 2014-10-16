var database = require('./db'),
    mongodb = new database(),
    dbName = 'countries';

function Country (country) {
  this.name = country.name;
  this.code = country.code;
  this.ord = country.ord;
  this.desc = country.desc;
  this.img = country.img;
}

module.exports = Country;

Country.prototype.save = function (callback) {
  var country = {
    name: this.name,
    code: this.code,
    ord:  this.ord,
    desc: this.desc,
    img:  this.img,
    active: this.active
  };
  mongodb.save(dbName, country, callback);
};

Country.get = function (id, callback) {
  mongodb.get(dbName, id, callback);
};

Country.getMuti = function (query, callback) {
  var conditions = {};
  conditions.fields = {};
  conditions.order = {'ord': 1};
  mongodb.getMuti(dbName, query, conditions, callback);
};
