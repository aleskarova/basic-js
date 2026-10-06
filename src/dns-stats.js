const { NotImplementedError } = require("../lib");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  for (const domain of domains) {
    const dns = domain.split(".");
    let currentDns = "";
    for (let i = dns.length - 1; i >= 0; i -= 1) {
      const subdomain = `${currentDns}.${dns[i]}`;
      const currentCount = result[subdomain] ?? 0;
      result[subdomain] = currentCount + 1;
      currentDns = subdomain;
    }
  }

  return result;
}

getDNSStats(["epam.com"]);

module.exports = {
  getDNSStats,
};
