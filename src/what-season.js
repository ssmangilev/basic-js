import { NotImplementedError } from '../extensions/index.js';
/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (typeof(date) === 'undefined') {
    return "Unable to determine the time of year!";
  }
  else if (date.getMonth !== Date.prototype.getMonth) {
    throw new Error("Invalid date!");
  }
  else {
    if (date.getMonth()+1 == 12 || date.getMonth()+1 == 1 || date.getMonth()+1 == 2) {
      return 'winter';
    }
    else if (date.getMonth()+1 == 3 || date.getMonth()+1 == 4 || date.getMonth()+1 == 5) {
      return 'spring';
    }
    else if (date.getMonth()+1 == 6 || date.getMonth()+1 == 7 || date.getMonth()+1 == 8) {
      return 'summer';
    }
    else {
      return 'autumn';
    }
  }
}