'use strict';


/**
 * Adds a new member
 *
 * body Member  (optional)
 * returns Member
 **/
exports.addMember = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Gets a single member by their id
 *
 * id String 
 * returns List
 **/
exports.getMemberById = function(id) {
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
 * Gets all members
 *
 * returns List
 **/
exports.getMembers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : "id"
}, {
  "name" : "name",
  "id" : "id"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

