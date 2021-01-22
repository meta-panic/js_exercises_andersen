const filter = require("./task_2");

test("Функция принимает в себя массив и другую функцию, возвращает те элементы массива, для которых функция callback возвращает true", () => {
  expect(
    filter([1, 2, 3, 5, 6, 3], function (a) {
      return a % 2 == 0;
    })
  ).toEqual([2, 6]);
  expect(
    filter([1, "a", "t", 5, 6, 3], function (a) {
      return a % 2 == 0;
    })
  ).toEqual([6]);
  expect(
    filter(["Bruce", "a", "t", 5, "Batman", 3], function (a) {
      return a === "Batman" || a === "Bruce";
    })
  ).toEqual(["Bruce", "Batman"]);
});
