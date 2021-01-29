/**
 * sum(2)(3)(5)(6) = 16
 * @param  {} acc
 *
 * После реализации запустить соответствующий тест!
 */
const sum = (acc) => {
  function add(b) {
    if (!b) {
      return acc;
    }
    return sum(acc + b);
  }

  add.toString = function () {
    return acc;
  };

  return add;
};

console.log(sum(2)(3)(4)(5));

module.exports.sum = sum;
