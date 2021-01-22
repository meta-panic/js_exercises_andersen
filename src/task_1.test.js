const addTonnage = require("./task_1");
const changeCar = require("./task_1");
const copyProp = require("./task_1");

test("Функция копирует свойства объекта и записывает его в новый и возвращает его", () => {
  expect(copyProp({ massa: 1 })).toEqual({ massa: 1 });
  expect(copyProp({ prop1: 1, prop2: 2, prop3: null })).toEqual({
    prop1: 1,
    prop2: 2,
    prop3: null,
  });
});

test("Функция должна добавлять свойство passengers c дефолтным значением 35", () => {
  expect(changeCar({ prop1: 1 })).toEqual({ prop1: 1, passengers: 35 });
});
