const { NotImplementedError } = require('../extensions/index.js');

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
  const reversedDomains = domains.map(domain => domain.split(".").reverse());
  const domainStats = {};
  for (let i = 0; i < reversedDomains.length; i++) {
    const domain = reversedDomains[i];
    for (let j = 0; j < domain.length; j++) {
      const domainStat = "." + domain.slice(0, j + 1).join(".");
      if (domainStats[domainStat]) { 
        domainStats[domainStat]++; 
      } else { 
        domainStats[domainStat] = 1; 
      }
    }
  }
  return domainStats;
}

module.exports = {
  getDNSStats
};
