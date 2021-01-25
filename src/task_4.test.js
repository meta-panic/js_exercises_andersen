const { func } = require("./task_4");

test("Вызов функции func должен выводить на экран фразу 'привет, аргумент1 агрумент2'", () => {
  let name = "Иван",
    surname = "Иванов";
  expect(func(surname, name)).toEqual(`привет, ${surname} ${name}`);
});
