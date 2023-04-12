const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;

  str = String(str);
  if("addition" in options) addition = String(addition);

  separator = separator || "+";
  additionSeparator = additionSeparator || "|";
  addition = addition || "";
  

  const additionRepeat = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const repeat = new Array(repeatTimes).fill(str + additionRepeat).join(separator);

  return repeat;
}

module.exports = {
  repeater
};
