"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDNSStats;

var _index = require("../extensions/index.js");

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
  var stats = {};

  for (var i = 0; i < domains.length; i++) {
    var domain = domains[i];
    var domain_str = '';

    while (domain.length > 0) {
      var dns_substr = domain.lastIndexOf('.') !== -1 ? domain.slice(domain.lastIndexOf('.')) : ".".concat(domain);
      domain_str += dns_substr;

      if (stats[domain_str]) {
        stats[domain_str] += 1;
      } else {
        stats[domain_str] = 1;
      }

      if (domain.indexOf('.') === -1) {
        domain = '';
      } else {
        domain = domain.slice(0, domain.lastIndexOf('.'));
      }

      console.log(domain);
    }
  }

  console.log(stats);
  return stats;
}

getDNSStats(['epam.com']);