"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = renameFiles;

var _index = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  var original_names = {};

  for (var i = 0; i < names.length; i++) {
    console.log(original_names);
    var count = 1;

    if (original_names.hasOwnProperty(names[i])) {
      original_names[names[i]] += 1;
      names[i] = "".concat(names[i], "(").concat(original_names[names[i]] - 1, ")");
      original_names[names[i]] = 1;
    } else {
      original_names[names[i]] = 1;
    }
  }

  return names;
}