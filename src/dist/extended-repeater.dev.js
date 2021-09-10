"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = repeater;

var _index = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  var additional_string = '';

  if (typeof str !== 'string') {
    str = String(str);
  }

  if (!options.separator) {
    options.separator = '+';
  }

  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }

  if (typeof options.addition !== 'undefined') {
    options.addition = String(options.addition);

    if (options.additionRepeatTimes) {
      additional_string = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
    } else {
      additional_string = options.addition;
    }
  }

  return (str + additional_string + options.separator).repeat(options.repeatTimes - 1) + (str + additional_string);
}