var database = require('./db'),
    mongodb = new database(),
    dbName = 'catagories';

function Catagory (catagory) {
  this.name = catagory.name;
  this.images = catagory.images;
  this.active = catagory.active;
  this.desc = catagory.desc;
}

module.exports = Catagory;

Catagory.prototype.save = function (callback) {
  var catagory = {
    name: this.name, 
    images: this.images,
    active: this.active,
    desc: this.desc
  };
  mongodb.save(dbName, catagory, callback);
};

Catagory.get = function (id, callback) {
  mongodb.get(dbName, id, callback);
};

Catagory.getMuti = function (query, callback) {
  var conditions = {};
  conditions.fields = {
    _id: 1,
    name: 1,
    desc: 1,
    images: 1,
    active: 1,
    ord: 1
  };

  conditions.order = {'ord': 1};
  mongodb.getMuti(dbName, query, conditions, callback);
};

