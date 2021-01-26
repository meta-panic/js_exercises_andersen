/**
 * Напишите свой собственный Array.prototype.myFilter(), который
 * должен вести себя точно также, как Array.prototype.filter().
 * Можно использовать цикл for или метод Array.prototype.forEach ().
 */
let s = [23, 65, 98, 5];
Array.prototype.myFilter = function (callback) {
  let newArray = []; // Добавьте свой код здесь
  this.forEach((value) => (callback(value) ? newArray.push(value) : 0));
  return newArray;
};
let new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});
console.log(new_s);
