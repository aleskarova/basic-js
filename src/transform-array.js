const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [...arr];
  let resultIndex = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    switch (item) {
      case "--discard-next":
        if (i < arr.length - 1) {
          i += 1;
          result.splice(++resultIndex, 1);
        }
        break;
      case "--discard-prev":
        if (resultIndex > 0) {
          resultIndex -= 1;
          result.splice(resultIndex, 2);
        }
        break;
      case "--double-next":
        if (i < arr.length - 1) {
          const nextItem = result[resultIndex + 1];
          result[resultIndex++] = nextItem;
        }
        break;
      case "--double-prev":
        if (i > 0) {
          const prevItem = result[resultIndex - 1];
          if (Number.isInteger(prevItem)) {
            result.splice(resultIndex, 0, prevItem);
          }
          resultIndex++;
        }
        break;
      default:
        resultIndex += 1;
    }
  }
  return result.filter((item) => Number.isInteger(item));
}

module.exports = {
  transform,
};
