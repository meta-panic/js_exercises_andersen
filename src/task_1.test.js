const { addProp } = require("./task_1");

test("Функция копирует свойства из целевого объекта и добавляет новое свойство к нему", () => {
  expect(addProp({ massa: 1 })).toEqual({ massa: 1 });
  expect(addProp({ prop1: 1, prop2: 2, prop3: null }, "prop4", 100)).toEqual({
    prop1: 1,
    prop2: 2,
    prop3: null,
    prop4: 100,
  });
});
