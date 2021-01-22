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
 * @param  {} inputObject
 */
function changeCar(inputObject) {
  let newCar = Object.assign(inputObject, { passengers: 35 });
  return newCar;
}
let car = { massa: 1 };
console.log("Объект car");
console.log(car);
let bus = changeCar(car);
console.log("Объект bus");
console.log(bus);
console.log("Объект car");
console.log(car);
