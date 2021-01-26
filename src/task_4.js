/**
 * Используя метод call(), привяжите this в функции func к объекту obj так,
 * чтобы вызов функции func выводил на экран значение свойства a объекта obj (исправлять в последней строке)
 */

let phrase = { value: "привет" };
function func(surname, name) {
  console.log(`${this.value}, ${surname} ${name}`);
  return `${this.value}, ${surname} ${name}`;
}
func.call(phrase, "Иванов", "Иван"); //тут должно вывести 'привет, Иванов Иван'

module.exports.func = func;
