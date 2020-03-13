'use strict';

var utils = require('../utils/writer.js');
var Practices = require('../service/PracticesService');

module.exports.addPractice = function addPractice (req, res, next, body) {
  Practices.addPractice(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPracticeById = function getPracticeById (req, res, next, id) {
  Practices.getPracticeById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPractices = function getPractices (req, res, next, clientId, start, end) {
  Practices.getPractices(clientId, start, end)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
