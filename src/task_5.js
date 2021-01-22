// Переделайте решение предыдущей задачи(task_4.js) так, чтобы вместо метода call() был метод apply().

let phrase = { value: "привет" };
function func(surname, name) {
  console.log(`${this.value}, ${surname} ${name}`);
}
func.apply(phrase, ["Иванов", "Иван"]); //тут должно вывести 'привет, Иванов Иван'
