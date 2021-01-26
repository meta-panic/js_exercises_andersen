const { makeTeam, makeTeam2, makeTeam3 } = require("../task_7");

test("Вызов функции должен выводить порядковый номер игрока (от 0 до 9)", () => {
  let team = makeTeam();
  expect(team[5]()).toBe(5);
  expect(team[9]()).toBe(9);
  let team2 = makeTeam2();
  expect(team2[1]()).toBe(1);
  expect(team2[3]()).toBe(3);
  let team3 = makeTeam3();
  expect(team3[7]()).toBe(7);
  expect(team3[8]()).toBe(8);
});
