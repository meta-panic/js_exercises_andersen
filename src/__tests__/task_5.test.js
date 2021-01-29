const { func } = require("../task_5");

test("Вызов функции func должен выводить на экран фразу 'привет, аргумент1 агрумент2'", () => {
  let name = ["Иванов", "Иван"];
  let phrase = { value: "привет" },
    anotherPhrase = { value: "пока" };
  expect(func.apply(phrase, name)).toEqual(`привет, ${name[0]} ${name[1]}`);
  expect(func.apply(anotherPhrase, name)).toEqual(`пока, ${name[0]} ${name[1]}`);
});
