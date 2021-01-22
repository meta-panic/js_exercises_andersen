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
 * Функция, которая копирует свойства из одного объекта в другой
 * @param {*} inputObject
 */
function copyProp(inputObject) {
  let newObj = Object.create({});
  for (let key in inputObject) {
    newObj[key] = inputObject[key];
  }
  return newObj;
}

/**
 * Добавляет свойство passengers c дефолтным значением 35
 * @param {*} inputObject
 */
const changeCar = (inputObject) => {
  let obj = copyProp(inputObject);
  obj.passengers = 35;
  return obj;
};

/**
 * Функция для объекта типа autoTrack, копирует свойства из целевого объекта и доваляет ему свойство tonnage (значение указываем в параметрах)
 * @param {*} inputObject
 * @param {*} tonnage
 */
const addTonnage = (inputObject, tonnage) => {
  let obj = Object.assign(copyProp(inputObject), { tonnage });
  return obj;
};

let car = { massa: 1 };
console.log("Объект car");
console.log(car);

let bus = changeCar(car);
console.log("Объект bus");
console.log(bus);

console.log("Объект car");
console.log(car);

let autoTruck = addTonnage(car, 100);
console.log("Объект autoTruck");
console.log(autoTruck);

console.log("Объект car");
console.log(car);

module.exports = copyProp;
module.exports = changeCar;
module.exports = addTonnage;
