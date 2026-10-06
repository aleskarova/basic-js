const { NotImplementedError } = require("../lib");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }

  const n0 = +sampleActivity;
  const isIncorrect = Number.isNaN(n0) || n0 <= 0 || n0 > MODERN_ACTIVITY;
  if (isIncorrect) {
    return false;
  }

  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
  return Math.ceil(t);
}

module.exports = {
  dateSample,
};
