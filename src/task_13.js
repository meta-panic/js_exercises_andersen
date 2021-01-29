/* Напиши функцию в которой будет запрос
 * на http://www.json-generator.com/api/json/get/cfQCylRjuG,
 * из ответа ты получишь поле getUsersData,
 * если значение равно true получи и выведи в консоль
 * данные из http://www.json-generator.com/api/json/get/cfVGucaXPC
 */

function getData(url = "http://www.json-generator.com/api/json/get/cfQCylRjuG") {
  fetch(url)
    .then(
      (response) => response.json(),
      (err) => {
        throw new Error(err);
      }
    )
    .then(
      (response) => console.log(response.getUsersData),
      (err) => {
        console.log(err);
      }
    );
}

getData();

// Вариант 2

function getData2(url = "http://www.json-generator.com/api/json/get/cfQCylRjuG") {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(JSON.parse(xhr.responseText));
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  }).then(
    (resolve) => console.log(resolve.getUsersData),
    (reject) => console.log(reject)
  );
}

getData2();
