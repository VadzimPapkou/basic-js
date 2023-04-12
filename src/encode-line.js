const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str.length === 0) return "";

  let lastChar = str[0];
  let lastLength = 1;
  let result = "";
  for(let i = 1; i < str.length; i++) {
    if(lastChar === str[i]) {
      lastLength++;
    } else {
      result += (lastLength === 1 ? "" : lastLength) + lastChar;

      lastChar = str[i];
      lastLength = 1;
    }
  }

  result += (lastLength === 1 ? "" : lastLength) + lastChar;
  return result;
}

module.exports = {
  encodeLine
};
