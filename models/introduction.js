var database = require("./db"),
    mongodb = new database(),
    dbName = "introduction";

function Introduction (intro) {
  this.content = intro.content;
  this.enterprice_culture = intro.enterprice_culture;
  this.duty = intro.duty;
  this.values = intro.values;
  this.spirit = intro.spirit;
  this.object = intro.object;
}

module.exports = Introduction;

Introduction.prototype.save = function (callback) {
  var introduction = {
    "content": this.content,
    "enterprice_culture": this.enterprice_culture,
    "duty": this.duty,
    "values": this.value,
    "spirit": this.spirit,
    "object": this.object
  };
  mongodb.save(dbName, introduction, callback);
};

Introduction.get = function (id, callback) {
  mongodb.get(dbName, id, callback);
};

Introduction.getMuti = function (query, callback) {
  var conditions = {};
  conditions.fields = {
    "_id": 1,
    "content": 1,
    "enterprice_culture": 1,
    "duty": 1,
    "values": 1,
    "spirit": 1,
    "object": 1
  };
  conditions.order = {};
  mongodb.getMuti(dbName, query, conditions, callback);
};
