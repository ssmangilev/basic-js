"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSumOfDigits;

var _index = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (n < 10) {
    return n;
  }

  var nSum = 0;
  var nArr = String(n).split('');

  for (var i = 0; i < nArr.length; i++) {
    nSum += Number(nArr[i]);
  }

  if (nSum >= 10) {
    nSum = getSumOfDigits(nSum);
  }

  return nSum;
}