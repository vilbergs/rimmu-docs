'use strict';

var utils = require('../utils/writer.js');
var Members = require('../service/MembersService');

module.exports.addMember = function addMember (req, res, next, body) {
  Members.addMember(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMemberById = function getMemberById (req, res, next, id) {
  Members.getMemberById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMembers = function getMembers (req, res, next) {
  Members.getMembers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
