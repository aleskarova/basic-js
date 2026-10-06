const { NotImplementedError } = require("../lib");

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
  let result = "";

  let letter = "";
  let count = 0;

  const encodeLetter = () => {
    const encodedCount = count > 1 ? `${count}` : "";
    return `${encodedCount}${letter}`;
  };

  for (let i = 0; i < str.length; i += 1) {
    if (letter === "") {
      letter = str[i];
      count += 1;
    } else if (str[i] === letter) {
      count += 1;
    } else {
      result += encodeLetter();
      letter = str[i];
      count = 1;
    }
  }

  result += encodeLetter();

  return result;
}

module.exports = {
  encodeLine,
};
