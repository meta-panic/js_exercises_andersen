/* Напиши функцию delay(ms), которая возвращает промис,
 * переходящий в состояние "resolved" через ms миллисекунд и который
 * несёт значение 100
 * */

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(100);
    }, ms);
  });
}

delay(1000).then((value) => console.log(`Done with ${value}`)); //Done with 100
