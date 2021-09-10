"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = encodeLine;

var _index = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  var result_str = "";
  var count = 1;

  for (var i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1] && i !== str.length - 1) {
      count += 1;
    } else {
      if (count > 1) {
        result_str += count + str[i];
      } else {
        result_str += str[i];
      }

      count = 1;
    }
  }

  console.log(result_str);
  return result_str;
}