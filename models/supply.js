var database = require("./db"),
    mongodb = new database(),
    dbName = "supplies";

function Supply (supply) {
  this.productedId = supply.productedId;
  this.name = supply.name;
  this.desc = supply.desc;
  this.imagePath = supply.imagePath;
  this.wort_dense = supply.wort_dense;
  this.alcohol_dense = supply.alcohol_dense;
  this.specification = supply.specification;
  this.sell_by_date = supply.sell_by_date;
  this.box_size = supply.bos_size;
}

module.exports = Supply;

Supply.prototype.save = function (callback) {
  var supply = {
    "productId": this.productId,
    "name": this.name,
    "desc": this.desc,
    "imagePath": this.imagePath,
    "wort_dense": this.wort_dense,
    "alcohol_dense": this.alcohol_dense,
    "specification": this.specification,
    "sell_by_date": this.sell_by_date,
    "box_size": this.box_size,
    "ord": this.ord
  };
  mongodb.save(dbName, supply, callback);
};

Supply.get = function (id, callback) {
  mongodb.get(dbName, id, callback);
};

Supply.getMuti = function (query, callback) {
  var conditions = {};
  conditions.fields = {
    "productId": 1,
    "name": 1,
    "desc": 1,
    "imagePath": 1,
    "wort_dense": 1,
    "alcohol_dense": 1,
    "specification": 1,
    "sell_by_date": 1,
    "box_size": 1,
    "ord": 1
  };
  conditions.order = {"ord": 1};
  console.log(query);
  mongodb.getMuti(dbName, query, conditions, callback);
};
