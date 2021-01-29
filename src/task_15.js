/** При помощи функции run реализовать task_14 на ES7 стандарте
 */

async function run() {
  let value;
  try {
    value = await Promise.resolve(3400);
    if (value > 300) {
      throw new Error("Error");
    }
    return "Horay";
  } catch (e) {
    console.log(e);
  } finally {
    console.log("This is Finally!");
  }
}

console.log(run());
