var database = require("./db"),
    mongodb = new database(),
    dbName = "products";

function Product (product) {
  this._id = product._id;
  this.name = product.name;
  this.imagePath = product.imagePath;
  this.content = product.content;
  this.active = product.active;
  this.hot = product.hot;
  this.ord = product.ord;
  this.type = product.type;
  this.country = product.country;
  this.cata = product.cata;
};

module.exports = Product;

Product.prototype.save = function (callback) {
  var product = {
    name: this.name,
    imagePath: this.imagePath,
    desc: this.desc,
    content: this.content,
    active: this.active,
    hot: this.hot,
    ord: this.ord,
    type: this.type,
    cata: this.cata,
    country: this.country
  }
  mongodb.save(dbName, product, callback);
};

Product.get = function (id, callback) {
  mongodb.get(dbName, id, callback);
};

Product.getMuti = function (query, callback) {
  var conditions = {};
  conditions.fields = {
    '_id': 1,
    'name': 1,
    'imagePath': 1,
    'content': 1,
    'desc': 1,
    'active': 1,
    'hot': 1,
    'ord': 1,
    'type': 1,
    'country': 1,
    'cata': 1
  };
  conditions.order = {"ord": 1};
  mongodb.getMuti(dbName, query, conditions, callback);
};
