"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCommonCharacterCount;

var _index = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  var counter = 0;
  var s1Arr = s1.split('');
  var s2Arr = s2.split('');
  var s1Obj = {};
  var s2Obj = {};
  s1Arr.forEach(function (el) {
    if (!Object.prototype.hasOwnProperty.call(s1Obj, el)) {
      s1Obj[el] = 1;
    } else {
      s1Obj[el] += 1;
    }
  });
  s2Arr.forEach(function (el) {
    if (!Object.prototype.hasOwnProperty.call(s2Obj, el)) {
      s2Obj[el] = 1;
    } else {
      s2Obj[el] += 1;
    }
  });
  Object.keys(s1Obj).forEach(function (key) {
    if (Object.prototype.hasOwnProperty.call(s2Obj, key)) {
      counter += Math.min(s1Obj[key], s2Obj[key]);
    }
  });
  return counter;
}