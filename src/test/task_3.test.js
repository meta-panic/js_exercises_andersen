const { func } = require("../task_3");

test("Используя метод call(), нужно привязать this в функции func к объекту obj", () => {
  let obj = { a: 13, b: 22 };
  expect(func.call(obj)).toBe(13);
  obj = { a: 11, b: 22 };
  expect(func.call(obj)).toBe(11);
  delete obj.a;
  expect(func.call(obj)).toBe(undefined);
});
