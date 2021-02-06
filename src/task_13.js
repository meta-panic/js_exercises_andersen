/* Напиши функцию в которой будет запрос
 * на http://www.json-generator.com/api/json/get/cfQCylRjuG,
 * из ответа ты получишь поле getUsersData,
 * если значение равно true получи и выведи в консоль
 * данные из http://www.json-generator.com/api/json/get/cfVGucaXPC
 */

const [isUserDataUrl, userDataUrl] = [
  "http://www.json-generator.com/api/json/get/cfQCylRjuG",
  "http://www.json-generator.com/api/json/get/cfVGucaXPC",
];

function getData(firtsUrl = isUserDataUrl, secondUrl = userDataUrl) {
  fetch(firtsUrl)
    .then((response) => response.json())
    .then((response) => {
      if (response.getUsersData === true) {
        return fetch(secondUrl);
      } else {
        throw new Error("getUsersData не true");
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data[0].username === "Silas") {
        console.table(data[0]);
        return fetch("https://next.json-generator.com/api/json/get/E1eX9Wre5");
      }
    })
    .then((response) => response.json())
    .then((data) => console.table(data))
    .catch((e) => {
      console.log(e.message);
    });
}

getData();

// Вариант 2

function getData2(firtsUrl = isUserDataUrl, secondUrl = userDataUrl) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", firtsUrl);
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  })
    .then((response) => {
      if (response.getUsersData === true) {
        fetch(secondUrl).then((response) => response.json().then((data) => console.table(data)));
      } else {
        throw new Error("getUsersData не true");
      }
    })
    .catch((e) => {
      console.log(e.message);
    });
}

getData2();
