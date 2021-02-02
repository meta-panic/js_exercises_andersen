/**
 * sum(2)(3)(5)(6) = 16
 * @param  {} value
 *
 * После реализации запустить соответствующий тест!
 */
const sum = (value) => {
  function add(nextValue) {
    if (!nextValue) {
      return value;
    }
    return sum(value + nextValue);
  }

  add.toString = function () {
    return value;
  };

  return add;
};

console.log(sum(2)(3)(4)(5));

module.exports.sum = sum;
