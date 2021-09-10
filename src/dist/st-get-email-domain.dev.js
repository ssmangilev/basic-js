"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getEmailDomain;

var _index = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  return email.substring(email.lastIndexOf('@') + 1);
}