"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../extensions/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
var VigenereCipheringMachine =
/*#__PURE__*/
function () {
  function VigenereCipheringMachine() {
    var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    _classCallCheck(this, VigenereCipheringMachine);

    this.reverse = reverse;
  }

  _createClass(VigenereCipheringMachine, [{
    key: "generate_key",
    value: function generate_key(phrase, key) {
      var generated_key = '';

      if (key.length < phrase.length) {
        generated_key = key.repeat(Math.ceil(phrase.length / key.length)) + key.slice(0, phrase.length % key.length);
        return generated_key.split('');
      } else {
        return key.split('');
      }
    }
  }, {
    key: "encrypt",
    value: function encrypt(phrase, keyWord) {
      if (typeof phrase === 'undefined' || typeof keyWord === 'undefined') {
        throw new Error();
      }

      var result_string = '';
      phrase = phrase.toUpperCase();
      keyWord = keyWord.toUpperCase();
      var generated_key = this.generate_key(phrase, keyWord);

      for (var i = 0; i < phrase.length; i++) {
        if (phrase.charCodeAt(i) >= 65 && phrase.charCodeAt(i) <= 90) {
          result_string += String.fromCharCode((phrase.charCodeAt(i) + generated_key[0].charCodeAt(0)) % 26 + 65);
          generated_key.shift();
        } else {
          result_string += phrase[i];
        }
      }

      return this.reverse ? result_string : result_string.split('').reverse().join('');
    }
  }, {
    key: "decrypt",
    value: function decrypt(encryptedPhrase, keyWord) {
      if (typeof encryptedPhrase === 'undefined' || typeof keyWord === 'undefined') {
        throw new Error();
      }

      var result_string = '';
      encryptedPhrase = encryptedPhrase.toUpperCase();
      keyWord = keyWord.toUpperCase();
      var generated_key = this.generate_key(encryptedPhrase, keyWord);

      for (var i = 0; i < encryptedPhrase.length; i++) {
        if (encryptedPhrase.charCodeAt(i) >= 65 && encryptedPhrase.charCodeAt(i) <= 90) {
          result_string += String.fromCharCode((encryptedPhrase.charCodeAt(i) + 26 - generated_key[0].charCodeAt(0)) % 26 + 65);
          generated_key.shift();
        } else {
          result_string += encryptedPhrase[i];
        }
      }

      return this.reverse ? result_string : result_string.split('').reverse().join('');
    }
  }]);

  return VigenereCipheringMachine;
}();

exports["default"] = VigenereCipheringMachine;