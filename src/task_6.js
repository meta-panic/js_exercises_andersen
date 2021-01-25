/**
 * В указанном месте примените конструкцию с методом bind() так, чтобы this
 *  внутри функции func всегда указывал на объект phrase.
 */
let phrase = { value: "привет" };
function func(surname, name) {
  return function () {
    console.log(`${this.value}, ${surname} ${name}`);
    return `${this.value}, ${surname} ${name}`;
  }.bind(phrase)();
} // Тут воспользуйтесь bind()func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

func("Иванов", "Иван");
func("Петров", "Петр");

module.exports.func = func;
