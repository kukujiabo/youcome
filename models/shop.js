var database = require('./db'),
    mongodb = new database(),
    dbName  = 'shops';

function Shop (shop) {
  this.name = shop.name;
  this.open_at = shop.open_at;
  this.tips = shop.tips;
  this.image_dir = shop.image_dir;
  this.tele = shop.tele;
  this.photos = shop.photos;
  this.address = shop.address;
};

module.exports = Shop;

Shop.prototype.save = function (callback) {
  var shop = {
    name: this.name,
    open_at: this.open_at,
    tips: this.tips,
    image_dir: this.image_dir,
    tele: this.tele,
    photos: this.photos,
    address: this.address
  };
  mongodb.save(dbName, shop, callback);
};

Shop.get = function (id, callback) {
  mongodb.get(dbName, id, callback);
};

Shop.getMuti = function (query, callback) {
  var conditions = {};
  conditions.fields = {};
  conditions.order = {'_id': 1};
  mongodb.getMuti(dbName, query, conditions, callback);
};
