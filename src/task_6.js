/**
 * В указанном месте примените конструкцию с методом bind() так, чтобы this
 *  внутри функции func всегда указывал на объект phrase.
 *
 * После реализации запустить соотсветствующий тест!
 */
let phrase = { value: "привет" };
function func(surname, name) {
  console.log(`${this.value}, ${surname} ${name}`);
  return `${this.value}, ${surname} ${name}`;
} // Тут воспользуйтесь bind()func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

let fn = func.bind(phrase);
fn("Иванов", "Иван");
fn("Петров", "Петр");

module.exports.func = func;
