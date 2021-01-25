// Переделайте решение предыдущей задачи(task_4.js) так, чтобы вместо метода call() был метод apply().

let phrase = { value: "привет" };
function func(surname, name) {
  return function () {
    console.log(`${this.value}, ${surname} ${name}`);
    return `${this.value}, ${surname} ${name}`;
  }.apply(phrase);
}
func("Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'

module.exports.func = func;
