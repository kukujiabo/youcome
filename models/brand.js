var mongodb = require("./db");

function Brand (brand) {
  this.name = brand.name;
  this.path = brand.path;
  this.desc = brand.desc;
  this.ord = brand.ord;
  this.url = brand.url;
  this.active = brand.active;
  this.first = brand.first;
};

module.exports = Brand;

Brand.prototype.save = function (callback) {
  var brand = {
    name: this.name,
    path: this.path,
    desc: this.desc,
    ord: this.ord,
    url: this.url,
    first: this.first,
    active: this.active
  };

  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }

    db.collection("brand", function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }

      collection.insert(brand, {
        safe: true
      }, function (err, brand) {
        mongodb.close();
        if (err) {
          return callback(err);
        }
        callback(null, brand[0]);
      });
    });
  });
};

Brand.get = function (name, callback) {
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }

    db.collection("brand", function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }

      collection.findOne({
        name: name
      }, function (err, user) {
        mongodb.close();
        if (err) {
          return callback(err);
        }
        callback(null, brand);
      });
    });
  });
};

Brand.getMuti = function (query, callback) {
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }

    db.collection("brand", function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }

      fields = { name: 1, path: 1, desc: 1, ord: 1, url: 1, first: 1, active: 1 };

      collection.find(query, { order: ['ord', 1], fields: fields }).toArray(function (err, result) {
        mongodb.close();
        if (err) {
          return callback(err);
        }
        callback(null, result);
      });
    });
  })
};
