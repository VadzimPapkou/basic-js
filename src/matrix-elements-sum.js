const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  xLoop: for(let x = 0; x < matrix[0].length; x++) {
    yLoop: for(let y = 0; y < matrix.length; y++) {
      const el = matrix[y][x];
      if(el === 0) continue xLoop;
      else result += el;
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
