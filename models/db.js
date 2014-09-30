var settings = require("../settings"),
    Db = require("mongodb").Db,
    Connection = require("mongodb").Connection,
    Server = require("mongodb").Server;

var database = function () {
  this.mongo = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT), {safe: true});
};

database.prototype.save = function (collectionName, obj, callback) {
  this.mongo.open(function (err, db) {
    if (err) {
      return callback(err);
    }

    db.collection(collectionName, function (err, collection) {
      if (err) {
        db.close();
        return callback(err);
      }

      collection.insert(obj, {safe: true}, function (err, obj) {
        db.close();
        if (err) {
          return callback(err);
        }
        callback(null, obj[0]);
      });
    });
  });
};

database.prototype.get = function (collectionName, id, callback) {
  this.mongo.open(function (err, db) {
    if (err) {
      return callback(err);
    }

    db.collection(collectionName, function (err, collection) {
      if (err) {
        db.close();
        return callback(err);
      }

      collection.findOne({id: id}, function (err, obj) {
        db.close();
        if (err) {
          callback(err);
        }
        callback(null, obj);
      });
    });
  });
};

database.prototype.getMuti = function (collectionName, query, conditions, callback) {
  this.mongo.open(function (err, db) {
    if (err) {
      return callback(err);
    }

    db.collection(collectionName, function (err, collection) {
      if (err) {
        db.close();
        return callback(err);
      }
      collection.find(query, conditions).sort(conditions.order).toArray(function (err, result) {
        db.close();
        if (err) {
          return callback(err);
        }
        callback(null, result);
      });
    });
  });
};

module.exports = database;
