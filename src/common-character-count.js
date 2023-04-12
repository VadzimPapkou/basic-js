const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1chars = {};
  const s2chars = {};
  let result = 0;

  
  collectChars(s1, s1chars);
  collectChars(s2, s2chars);
  
  console.log(s1chars, s2chars);

  Object.entries(s1chars).forEach(([char, s1count]) => {
    const s2count = s2chars[char] || 0;
    result += Math.min(s1count, s2count);
  });

  return result;

  function collectChars(string, output) {
    [...string].forEach(char => {
      if(output[char]) {
        output[char]++;
      } else {
        output[char] = 1;
      }
    })
  }
}

module.exports = {
  getCommonCharacterCount
};
