'use strict';

var Announcement = require('../models/announcement');

var announcements = function () {

};

announcements.getDisplayAnnoucement = function (callback) {

  Announcement.getMuti({active: 1}, callback);

};

module.exports = announcements;
