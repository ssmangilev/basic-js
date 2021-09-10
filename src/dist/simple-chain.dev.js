"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 * 
 */
var _default = {
  chain: [],
  getLength: function getLength() {
    return this.chain.length;
  },
  addLink: function addLink(value) {
    if (typeof value === 'undefined') {
      this.chain.push('( )');
    } else {
      this.chain.push('( ' + String(value) + ' )');
    }

    return this;
  },
  removeLink: function removeLink(position) {
    if (position > this.chain.length || !Number.isInteger(position) || typeof position !== 'number') {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }

    return this;
  },
  reverseChain: function reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain: function finishChain() {
    var result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};
exports["default"] = _default;