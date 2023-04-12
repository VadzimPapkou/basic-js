const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit(n) {
  n = String(n);
  let max = -Infinity;
  for(let i = 0; i < n.length; i++) {
    nArray = [...n];
    nArray.splice(i, 1);
    max = Math.max(+nArray.join(""), max);
  }
  return max;
}

module.exports = {
  deleteDigit
};
