const { NotImplementedError } = require("../lib");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const countDigits = (num) => {
    let current = num;
    let sum = 0;
    while (current > 0) {
      sum += current % 10;
      current = Math.trunc(current / 10);
    }
    return sum;
  };

  let currentNum = n;
  while (currentNum >= 10) {
    currentNum = countDigits(currentNum);
  }

  return currentNum;
}

module.exports = {
  getSumOfDigits,
};
