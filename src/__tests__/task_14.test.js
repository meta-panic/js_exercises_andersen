const { getResolvedPromise } = require("../task_14");

describe("Проверка цепочки промиссов", () => {
  it("Проверка catch", () => {
    return getResolvedPromise(500).catch((e) => {
      expect(e).toBe("Ошибка");
    });
  });

  it("Проверка then", () => {
    return getResolvedPromise(200).catch((e) => {
      expect(e).toBe("Horay");
    });
  });

  it("Проверка finally", () => {
    return getResolvedPromise(200).catch((e) => {
      expect(e).toBe(undefined);
    });
  });
});
