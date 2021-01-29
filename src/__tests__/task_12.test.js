const { sum } = require("../task_12");

test("sum(2)(3)(5)(6) = 16", () => {
  console.log(sum(2)(3));
  expect(sum(2).toString()).toBe(2);
  expect(sum(2)(3).toString()).toBe(5);
  expect(sum(2)(3)(5)(6).toString()).toBe(16);
});
