'use strict';


/**
 * Gets all attendances for a practice
 * Gets all attendances the user has access to if a practice Id is not given
 *
 * practiceId UUID  (optional)
 * returns List
 **/
exports.getAttendance = function(practiceId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "practiceId" : "practiceId",
  "id" : "id",
  "memberId" : "memberId"
}, {
  "practiceId" : "practiceId",
  "id" : "id",
  "memberId" : "memberId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register a member's attendance
 *
 * practiceId UUID Uuid of the practice to register to
 * memberId UUID Uuid of the practice to register to
 * returns inline_response_201
 **/
exports.registerAttendance = function(practiceId,memberId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "practiceId" : "practiceId",
  "id" : "id",
  "memberId" : "memberId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

