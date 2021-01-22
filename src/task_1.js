"use strict";
/**
 * В следующем программном коде создается объект автомобиль (car) со свойством масса, а
на его основе создается объект автобус bus c дополнительным свойством пассажиры
(passengers), но, к сожалению, этим же свойством наделяется и исходный объект
автомобиль (car).
Исправьте скрипт, чтобы свойство пассажиры (passengers) получал только объект bus.
Добавьте в скрипт функцию, наделяющую объект, переданный в качестве параметра,
свойством тоннаж (tonnage) и с помощью ее создайте объект грузовик (autoTruck) на
основе объекта car.
Выведите в консоль описание всех созданных объектов со значениями их свойств.
 */

/**
 * Функция копирует свойства из целевого объекта и добавляет новое свойство к нему
 * @param {*} inputObject целевой объект
 * @param {*} prop новое свойство
 * @param {*} value значение нового свойства
 */
const addProp = (inputObject, prop = "default", value = 0) => {
  let obj = Object.assign({}, inputObject);
  obj[prop] = value;
  return obj;
};

let car = { massa: 1 };
console.log("Объект car");
console.log(car);

let bus = addProp(car, "passengers", 32);
console.log("Объект bus");
console.log(bus);

console.log("Объект car");
console.log(car);

let autoTruck = addProp(car, "tonnage", 100);
console.log("Объект autoTruck");
console.log(autoTruck);

console.log("Объект car");
console.log(car);

module.exports.addProp = addProp;
