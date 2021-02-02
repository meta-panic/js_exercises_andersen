/* Написать функцию getResolvedPromise(value),
 * которая возвращает зарезолвленный промис с значением value.
 * Вызвать эту функцию со значением 500.
 * Обработать вызов в then. Если придёт значение больше 300,
 * то выбросить через throw ошибку c текстом ‘Error’, если меньше или равно 300 то вернет ‘Horay’
 * Поймать ошибку через catch и вывести в консоль текст ошибки.
 * Ниже описать finally, который будет выводить в консоль текст ‘This is Finally!’
 *
 * После реализации запустить соответствующий тест!
 */

function getResolvedPromise(value) {
  return Promise.resolve(value)
    .then(function () {
      if (value > 300) {
        throw new Error("Error");
      }
      return "Horay";
    })
    .catch((e) => {
      console.log(e.message);
    })
    .finally(console.log("This is Finally!"));
}

getResolvedPromise(3040);

module.exports.getResolvedPromise = getResolvedPromise;
