var database = require("./db"),
    mongodb = new database(),
    dbName = "contacts";

function Contact (contact) {
  this._id = contact._id;
  this.name = contact.name;
  this.value = contact.value;
  this.active = contact.active;
  this.ord = contact.ord;
}

module.exports = Contact;

Contact.prototype.save = function (callback) {
  var contact = {
    name: this.name,
    value: this.value,
    active: this.active,
    ord: this.ord
  };
  mongodb.save(dbName, contact, callback);
};

Contact.get = function (id, callback) {
  mongodb.get(dbName, id, callback);
};

Contact.getMuti = function (query, callback) {
  var conditions = {};
  conditions.fields = {
    "_id": 1,
    "name": 1,
    "value": 1,
    "active": 1,
    "ord": 1
  };

  conditions.order = {"ord": 1};
  mongodb.getMuti(dbName, query, conditions, callback);
};

Contact.getMuti({active: 1}, function (err, result) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});
