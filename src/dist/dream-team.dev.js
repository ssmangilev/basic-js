"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createDreamTeam;

var _index = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  var result_members = [];

  if (!Array.isArray(members)) {
    return false;
  }

  if (members.length == 0) {
    return null;
  }

  for (var i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      result_members.push(members[i].trim()[0].toUpperCase());
    } else {
      continue;
    }
  }

  return String(result_members.sort().join(""));
}