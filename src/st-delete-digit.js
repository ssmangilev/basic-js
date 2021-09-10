import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const arr = String(n).split('');
  let maxNumber = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (Number(arr.filter((item, index) => index !== i).join('')) > maxNumber) {
      maxNumber = Number(arr.filter((item, index) => index !== i).join(''));
    }
  }
  return maxNumber;
}
