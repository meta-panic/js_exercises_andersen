const { SingletonCreator } = require("../task_8");

test("Тестирование корректности синглтона", () => {
  const a = new SingletonCreator();
  const b = new SingletonCreator();
  expect(a).toEqual(b);
  expect(a.getSize()).toBe(b.getSize());
  a.setSize(200);
  expect(a.getSize()).toBe(b.getSize());
});
