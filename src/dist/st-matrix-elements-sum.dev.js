"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getMatrixElementsSum;

var _index = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  var sumArr = 0;
  var arrIndex = [];

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        arrIndex.push(j);
      }

      if (arrIndex.includes(j)) {
        sumArr += 0;
      } else {
        sumArr += matrix[i][j];
      }
    }
  }

  return sumArr;
}