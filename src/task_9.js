/**
 * Напишите функцию, которая принимает 1параметр. При первом вызове, она его запоминает, при втором -
 * суммирует переданный параметр с тем, что передали в первый раз и т.д. Например:
 * sum(3) = 3
 * sum(5) = 8
 * sum(228)
 */

var sum = (function () {
  var result = 0;
  return function (value) {
    result += value;
    return result;
  };
})();

module.exports.sum = sum;
