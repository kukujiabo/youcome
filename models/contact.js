var database = require("./db"),
    mongodb = new database(),
    dbName = "contacts";

function Contact (contact) {
  this._id = contact._id;
  this.name = contact.name;
  this.position = contact.position;
  this.phone = contact.phone;
  this.email = contact.email;
  this.ord = Contact.ord;
}

module.exports = Contact;

Contact.prototype.save = function (callback) {
  var contact = {
    name: this.name,
    position: this.position,
    phone: this.phone,
    email: this.email,
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
    "position": 1,
    "phone": 1,
    "email": 1,
    "ord": 1
  };

  conditions.order = {"ord": 1};
  mongodb.getMuti(dbName, query, conditions, callback);
};
