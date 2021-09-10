"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = sortByHeight;

var _index = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  var resultArray = [];
  var sortedArray = arr.filter(function (x) {
    return x > -1;
  }).sort(function (a, b) {
    return a - b;
  });

  if (arr.indexOf(-1) >= 0) {
    for (var i = 0; i <= arr.length - 1; i++) {
      if (arr[i] === -1) {
        resultArray.push(arr[i]);
      } else {
        resultArray.push(sortedArray[0]);
        sortedArray.splice(0, 1);
      }
    }
  } else {
    resultArray = sortedArray;
  }

  return resultArray;
}