const { NotImplementedError } = require("../lib");

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
  const calculateMines = (x, y) => {
    if (matrix[y][x]) {
      return 1;
    }

    let sum = (matrix[y][x - 1] ?? 0) + (matrix[y][x + 1] ?? 0);

    if (matrix[y + 1]) {
      sum +=
        (matrix[y + 1][x - 1] ?? 0) +
        (matrix[y + 1][x] ?? 0) +
        (matrix[y + 1][x + 1] ?? 0);
    }

    if (matrix[y - 1]) {
      sum +=
        (matrix[y - 1][x - 1] ?? 0) +
        (matrix[y - 1][x] ?? 0) +
        (matrix[y - 1][x + 1] ?? 0);
    }

    return sum;
  };

  const result = [];
  for (let i = 0; i < matrix.length; i += 1) {
    const resultRow = [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      resultRow.push(calculateMines(j, i));
    }
    result.push(resultRow);
  }

  return result;
}

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
]);

module.exports = {
  minesweeper,
};
