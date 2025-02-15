import { NotImplementedError } from '../extensions/index.js';

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
export default function renameFiles(names) {
  let original_names = {};
  for (let i=0; i<names.length; i++) {
    console.log(original_names)
    let count = 1;
    if (original_names.hasOwnProperty(names[i])) {
      original_names[names[i]] += 1;
      names[i] = `${names[i]}(${original_names[names[i]] - 1})`;
      original_names[names[i]] = 1;
    } else {
      original_names[names[i]] = 1;
    }
  }
  return names;
}
