/* Напиши функцию в которой будет запрос
 * на http://www.json-generator.com/api/json/get/cfQCylRjuG,
 * из ответа ты получишь поле getUsersData,
 * если значение равно true получи и выведи в консоль
 * данные из http://www.json-generator.com/api/json/get/cfVGucaXPC
 */

function getData(url = "http://www.json-generator.com/api/json/get/cfQCylRjuG") {
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      if (response.getUsersData === true) {
        console.log(response.getUsersData);
      } else {
        throw new Error("getUsersData не true");
      }
    })
    .catch((e) => {
      console.log(e.message);
    });
}

// getData();

// Вариант 2

function getData2(url = "http://www.json-generator.com/api/json/get/cfQCylRjuG") {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  })
    .then((response) => {
      if (response.getUsersData === true) {
        console.log(response.getUsersData);
      } else {
        throw new Error("getUsersData не true");
      }
    })
    .catch((e) => {
      console.log(e.message);
    });
}

getData2();
