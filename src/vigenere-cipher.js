import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  constructor(reverse=true) {
    this.reverse = reverse;
  }
  generate_key(phrase, key) {
    let generated_key = '';
    if (key.length < phrase.length) {
      generated_key = key.repeat(Math.ceil(phrase.length/key.length)) + key.slice(0,phrase.length%key.length);
      return generated_key.split('');
    }
    else {
      return key.split('')
    }
  }
  encrypt(phrase, keyWord) {
    if (typeof(phrase) === 'undefined' || typeof(keyWord) === 'undefined') {
      throw new Error('Incorrect arguments!');
    }
    let result_string = '';
    phrase = phrase.toUpperCase();
    keyWord = keyWord.toUpperCase();
    let generated_key = this.generate_key(phrase, keyWord);
    for (let i=0;i<phrase.length;i++) {
      if (phrase.charCodeAt(i) >=65  && phrase.charCodeAt(i) <=90) {
        result_string += String.fromCharCode(((phrase.charCodeAt(i) + generated_key[0].charCodeAt(0)) % 26) + 65);
        generated_key.shift()
      }
      else {
        result_string += phrase[i]
      }
    }
    return this.reverse ? result_string : result_string.split('').reverse().join('')
  }
  decrypt(encryptedPhrase, keyWord) {
    if (typeof(encryptedPhrase) === 'undefined' || typeof(keyWord) === 'undefined') {
      throw new Error('Incorrect arguments!');
    }
    let result_string = '';
    encryptedPhrase = encryptedPhrase.toUpperCase();
    keyWord = keyWord.toUpperCase();
    let generated_key = this.generate_key(encryptedPhrase, keyWord);
    for (let i=0;i<encryptedPhrase.length;i++) {
      if (encryptedPhrase.charCodeAt(i) >=65  && encryptedPhrase.charCodeAt(i) <=90) {
        result_string += String.fromCharCode(((encryptedPhrase.charCodeAt(i) + 26 - generated_key[0].charCodeAt(0)) % 26) + 65);
        generated_key.shift()
      }
      else {
        result_string += encryptedPhrase[i]
      }
    }
    return this.reverse ? result_string : result_string.split('').reverse().join('')
  }
}
