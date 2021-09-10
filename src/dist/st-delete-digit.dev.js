"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = deleteDigit;

var _index = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  var arr = String(n).split('');
  var maxNumber = 0;

  var _loop = function _loop(i) {
    if (Number(arr.filter(function (item, index) {
      return index !== i;
    }).join('')) > maxNumber) {
      maxNumber = Number(arr.filter(function (item, index) {
        return index !== i;
      }).join(''));
    }
  };

  for (var i = 0; i <= arr.length - 1; i++) {
    _loop(i);
  }

  return maxNumber;
}