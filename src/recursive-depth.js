const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    const calculateDepth = (element, currentDepth) => {
      if (!Array.isArray(element)) {
        return currentDepth;
      }
      if (element.length === 0) {
        return currentDepth + 1;
      }

      const depths = element.map((e) => calculateDepth(e, currentDepth + 1));

      return Math.max(...depths);
    };

    return calculateDepth(arr, 0);
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
