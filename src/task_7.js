/**
 * Следующий код создает массив функций-игроков players. По замыслу, каждый игрок должен выводить свой номер:
 */
function makeTeam() {
  let players = [];
  for (let i = 0; i < 10; i++) {
    var player = function () {
      // функция-игрок
      console.log(i); // выводит свой номер
    };
    players.push(player);
  }
  return players;
}
let team = makeTeam();
team[0](); // игрок выводит 10, а должен 0
team[5](); // игрок выводит 10...// .. все игроки выводят 10 вместо 0,1,2...9

/**
 * Почему все игроки выводят одно и тоже? Поправьте код так, чтобы функции-игроки работали как задумано.
 * Предложите несколько вариантов исправления
 */

//Вариант 2
function makeTeam2() {
  let players = [];
  for (var i = 0; i < 10; i++) {
    var player = function (j) {
      // функция-игрок
      return function () {
        console.log(j); // выводит свой номер
      };
    };
    players.push(player(i));
  }
  return players;
}

let team2 = makeTeam2();
team2[0](); // игрок выводит 10, а должен 0
team2[5](); // игрок выводит 10...// .. все игроки выводят 10 вместо 0,1,2...9

//Вариант 3
function makeTeam3() {
  let players = [];
  for (var i = 0; i < 10; i++) {
    var player = function (j) {
      // функция-игрок
      console.log(j); // выводит свой номер
    };
    players.push(player.bind(null, i));
  }
  return players;
}
let team3 = makeTeam3();
team3[1](); // игрок выводит 10, а должен 0
team3[7](); // игрок выводит 10...// .. все игроки выводят 10 вместо 0,1,2...9
