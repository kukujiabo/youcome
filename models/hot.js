var database = require("./db"),
    mongodb = new database(),
    dbName = "hots";

function Hot (hot) {
  this._id = hot._id;
  this.name = hot.name;
  this.imagePath = hot.imagePath;
  this.linkUrl = hot.linkUrl;
  this.ord = hot.ord;
  this.productId = hot.productId;
  this.active = hot.active;
}

module.exports = Hot;

Hot.prototype.save = function (callback) {
  var hot = {
    "name": this.name,
    "imagePath": this.imagePath,
    "linkUrl": this.linkUrl,
    "ord": this.ord,
    "productId": this.productId,
    "active": this.active
  };
  mongodb.save(dbName, hot, callback);
}

Hot.get = function (id, callback) {
  mongodb.get(dbName, id, callback);
};

Hot.getMuti = function (query, callback) {
  var conditions = {};
  conditions.fields = {
    "_id": 1,
    "name": 1,
    "imagePath": 1,
    "linkUrl": 1,
    "ord": 1,
    "productId": 1,
    "active": 1
  };

  conditions.order = {"ord": 1};
  mongodb.getMuti(dbName, query, conditions, callback);
};
