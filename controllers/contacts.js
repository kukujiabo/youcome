"use strict";

var Contacts = require("../models/contact");

var contacts = function () {

};

module.exports = contacts;

contacts.getDisplayContacts = function (callback) {

  Contacts.getMuti({active: 1}, callback);

};
