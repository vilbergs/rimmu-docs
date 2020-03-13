'use strict';

var utils = require('../utils/writer.js');
var Attendances = require('../service/AttendancesService');

module.exports.getAttendance = function getAttendance (req, res, next, practiceId) {
  Attendances.getAttendance(practiceId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerAttendance = function registerAttendance (req, res, next, practiceId, memberId) {
  Attendances.registerAttendance(practiceId, memberId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
