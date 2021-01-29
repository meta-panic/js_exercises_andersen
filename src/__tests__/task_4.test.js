const { func } = require("../task_4");

test("Вызов функции func должен выводить на экран фразу 'привет, аргумент1 агрумент2'", () => {
  let name = "Иван",
    surname = "Иванов";
  let phrase = { value: "привет" },
    anotherPhrase = { value: "пока" };
  expect(func.call(phrase, surname, name)).toEqual(`привет, ${surname} ${name}`);
  expect(func.call(null, surname, name)).toEqual(`${undefined}, ${surname} ${name}`);
  expect(func.call(anotherPhrase, surname, name)).toEqual(`пока, ${surname} ${name}`);
});
