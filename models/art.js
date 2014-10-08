var database = require("./db"),
    mongodb = new database(),
    dbName = "arts";

function Art (art) {
  this.title = art.title;
  this.url = art.url;
  this.desc= art.desc;
  this.content = art.content;
  this.imgPath = art.imgPath;
  this.active = art.active;
}

module.exports = Art;

Art.prototype.save = function (callback) {
  var art = {
    title:    this.title,
    url:      this.url,
    desc:     this.desc,
    content:  this.content,
    imgPath:  this.imgPath,
    active:   this.active
  };
  mongodb.save(dbName, art, callback);
};

Art.get = function (id, callback) {
  mongodb.get(dbName, id, callback);
};

Art.getMuti = function (query, callback) {
  var conditions = {};
  conditions.fields = {"title": 1, "desc": 1, "content": 1, "active": 1, "url": 1, "imgPath": 1};
  conditions.order = {"ord": 1};
  mongodb.getMuti(dbName, query, conditions, callback);
};
