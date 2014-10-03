var database = require("./db"),
    mongodb = new database(),
    dbName = "flagship";

function Flagship (flagship) {
  this.imgPath = flagship.imgPath;
  this.desc = flagship.desc;
  this.name = flagship.name;
  this.active = flagship.active;
}

module.exports = Flagship;

Flagship.prototype.save = function (callback) {
  var flagship = {
    "imgPath": this.imgPath,
    "desc": this.desc,
    "name": this.name,
    "active": this.active
  };
  mongodb.save(flagship);
};

Flagship.get = function (callback) {
  mongodb.get(dbName, id, callback);
};

Flagship.getMuti = function (query, callback) {
  var conditions = {};
  conditions.fields = {
    "_id" : 1,
    "imgPath": 1,
    "desc": 1,
    "name": 1,
    "active": 1
  };

  conditions.order = {"ord": 1};
  mongodb.getMuti(dbName, query, conditions, callback);
};
