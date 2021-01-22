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

// test("Функция должна добавлять свойство passengers (значение передается в параметрах, по дефлоту - 35)", () => {
//   expect(changeCar({ prop1: 1 }, 22)).toEqual({ prop1: 1, passengers: 22 });
// });

// test("копирует свойства из целевого объекта и доваляет ему свойство tonnage (значение указываем в параметрах, по дефолту - 50)", () => {
//   expect(addTonnage({ prop1: 1 }, 22)).toEqual({ prop1: 1, tonnage: 22 });
// });
