'use strict';


/**
 * Add a practice occasion
 *
 * body Practice  (optional)
 * returns Practice
 **/
exports.addPractice = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "start" : "2020-03-12T20:00:00Z",
  "member" : {
    "name" : "name",
    "id" : "id"
  },
  "end" : "2020-03-12T22:00:00Z",
  "id" : "id",
  "type" : "type"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets a practice
 * Gets all practices, filterable by member id, start date and end date
 *
 * id String 
 * returns List
 **/
exports.getPracticeById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "start" : "2020-03-12T20:00:00Z",
  "member" : {
    "name" : "name",
    "id" : "id"
  },
  "end" : "2020-03-12T22:00:00Z",
  "id" : "id",
  "type" : "type"
}, {
  "start" : "2020-03-12T20:00:00Z",
  "member" : {
    "name" : "name",
    "id" : "id"
  },
  "end" : "2020-03-12T22:00:00Z",
  "id" : "id",
  "type" : "type"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets all practices
 * Gets all practices, filterable by member id, start date and end date
 *
 * clientId String  (optional)
 * start String  (optional)
 * end String  (optional)
 * returns List
 **/
exports.getPractices = function(clientId,start,end) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "start" : "2020-03-12T20:00:00Z",
  "member" : {
    "name" : "name",
    "id" : "id"
  },
  "end" : "2020-03-12T22:00:00Z",
  "id" : "id",
  "type" : "type"
}, {
  "start" : "2020-03-12T20:00:00Z",
  "member" : {
    "name" : "name",
    "id" : "id"
  },
  "end" : "2020-03-12T22:00:00Z",
  "id" : "id",
  "type" : "type"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

