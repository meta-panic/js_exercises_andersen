<<<<<<< HEAD
// Переделайте решение предыдущей задачи(task_4.js) так, чтобы вместо метода call() был метод apply().

let phrase = { value: "привет" };
function func(surname, name) {
  console.log(`${this.value}, ${surname} ${name}`);
  return `${this.value}, ${surname} ${name}`;
}
func.apply(phrase, ["Иванов", "Иван"]); //тут должно вывести 'привет, Иванов Иван'

module.exports.func = func;
=======
/* Переделайте решение предыдущей задачи(task_4.js) так, чтобы вместо метода call() был метод apply().
 *
 * После реализации запустить соответствующий тест!
 */
>>>>>>> 14761a225a537e9de83c385dded05c81d61b1d22
