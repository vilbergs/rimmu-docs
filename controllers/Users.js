'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.createUser = function createUser (req, res, next, body) {
  Users.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
