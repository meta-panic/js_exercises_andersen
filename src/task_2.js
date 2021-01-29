/* Создайте функцию filter(arr,func),
 * которая получает массив arr и возвращает новый, в который
 * входят только те элементы arr , для которых func возвращает true.
 *
 * После реализации запустить соответствующий тест!
 */
// .. ваш код для filter
var arr = [1, 2, 3, 4, 5, 6, 7];

/**
 * Функция принимает в себя массив и другую функцию, возвращает те элементы массива, для которых функция callback возвращает true
 * @param {*} arr
 * @param {*} callback
 */
function filter(arr, callback) {
  return arr.filter(callback);
}

console.log(
  filter(arr, function (a) {
    return a % 2 == 0;
  })
); // 2,4,6

module.exports = filter;
