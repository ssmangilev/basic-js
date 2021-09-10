import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof(value) === 'undefined') {
      this.chain.push('( )');
    }
    else {
      this.chain.push('( ' + String(value) + ' )');
    }
    return this;
  },
  removeLink(position) {
    if (position > this.chain.length || !Number.isInteger(position) || typeof(position) !== 'number') {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    else {
      this.chain.splice(position-1,1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result
  }
};
