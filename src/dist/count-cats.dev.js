"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = countCats;

var _index = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (matrix.length == 0 || typeof matrix === 'undefined') {
    return 0;
  }

  var counter = 0;

  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i] == '^^') {
      counter++;
    }

    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == '^^') {
        counter++;
      }
    }
  }

  return counter;
}