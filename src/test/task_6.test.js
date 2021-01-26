const { func } = require("../task_6");

test("Вызов функции func должен выводить на экран фразу 'привет, аргумент1 агрумент2'", () => {
  let name = "Иван",
    surname = "Иванов";
  let phrase = { value: "привет" },
    anotherPhrase = { value: "пока" };
  expect(func.bind(phrase)(surname, name)).toEqual(`привет, ${surname} ${name}`);
  expect(func.bind(phrase, surname, name).bind(anotherPhrase, surname, name)()).toEqual(
    `привет, ${surname} ${name}`
  );
});
