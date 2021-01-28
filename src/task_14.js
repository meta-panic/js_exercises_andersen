/* Написать функцию getResolvedPromise(value),
 * которая возвращает зарезолвленный промис с значением value.
 * Вызвать эту функцию со значением 500.
 * Обработать вызов в then. Если придёт значение больше 300,
 * то выбросить через throw ошибку c текстом ‘Error’, если меньше или равно 300 то вернет ‘Horay’
 * Поймать ошибку через catch и вывести в консоль текст ошибки.
 * Ниже описать finally, который будет выводить в консоль текст ‘This is Finally!’
 */

function getResolvedPromise(value) {
  return Promise.resolve(value);
}

getResolvedPromise(500)
  .then((value) => {
    if (value > 300) {
      throw new Error("Error");
    }
    return "Horay";
  })
  .catch((e) => console.error(e.message))
  .finally(() => console.log("This is Finally!"));

module.exports.getResolvedPromise = getResolvedPromise;
