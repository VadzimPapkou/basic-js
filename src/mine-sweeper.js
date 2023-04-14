const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [...matrix].map(row => [...row].fill(0));

  matrix.forEach((row, y) => {
    row.forEach((el, x) => {
      [[1, 1], [1, 0], [0, 1], [-1, 0], [0, -1], [-1, -1], [-1, 1], [1, -1]].forEach(([dy, dx]) => matrix[y + dy][x + dx] && result[y][x]++);
    });
  });

  return result;
}

module.exports = {
  minesweeper
};
