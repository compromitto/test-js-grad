/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

const check = require('check-types');

module.exports = function sortArray(arr) {
  if (arr.some(i => !check.integer(i))) {
    throw new TypeError();
  } else if (!Array.isArray(arr) || !arr.length) {
    return [];
  } else {
    return arr.sort((a, b) => a - b);
  }
};
