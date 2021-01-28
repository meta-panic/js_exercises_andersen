/**
 * Создать SingletonCreator через IIFE
 * Используя свойство prototype задать методы getSize и setSize
 * Запустить тесты для этой задачи, проверить что они работаю корректно
 */
const SingletonCreator = (function () {
  var instance,
    size = 0;

  function SingletonCreator() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  SingletonCreator.prototype.getSize = function () {
    return size;
  };

  SingletonCreator.prototype.setSize = function (_size) {
    size = _size;
  };

  return SingletonCreator;
})();

var a = new SingletonCreator();
var b = new SingletonCreator();

a.setSize(100);

console.log(a.getSize());

console.log(a === b);

module.exports.SingletonCreator = SingletonCreator;
