/** Написать 2 функции: одна отправляет промисы паралельно, вторая - последовательно
 */
const request = (url) => fetch(url);

var urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/todos",
];

function sendPromiseParallel(urls) {
  return Promise.all(urls.map((value) => request(value)))
    .then((fulfilled) => console.log(fulfilled))
    .catch((e) => console.log(e));
}

function sendPromiseConsistently(urls) {
  urls.reduce((promise, item) => {
    return promise.then(() => {
      return new Promise((resolve) => resolve(request(item))).then((fulfilled) =>
        console.log(fulfilled)
      );
    });
  }, Promise.resolve());
}

sendPromiseConsistently(urls);
sendPromiseParallel(urls);
