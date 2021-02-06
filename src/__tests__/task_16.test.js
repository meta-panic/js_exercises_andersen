const { compose, multiply, plus } = require("../task_16");

describe("Проверка compose", () => {
  it("Проверка plus и multiply, а так же порядка выполнения", () => {
    expect(compose(plus(4), multiply(2))(2)).toBe(8);
  });

  it("Проверка plus и plus", () => {
    expect(compose(plus(4), plus(1))(2)).toBe(7);
  });

  it("Проверка multiply и multiply, а так же порядка выполнения", () => {
    expect(compose(multiply(1), multiply(1))(2)).toBe(2);
  });

  it("Проверка с 3-мя аругментами", () => {
    expect(compose(plus(2), plus(2), multiply(4))(5)).toBe(24);
    expect(compose(plus(1), plus(5), multiply(78))(11)).toBe(864);
  });

  it("Проверка с 4-мя аругментами", () => {
    expect(compose(plus(2), plus(2), multiply(4), plus(6))(5)).toBe(48);
    expect(compose(plus(1), plus(5), multiply(78), multiply(2))(11)).toBe(1722);
  });
});

describe("Проверка plus", () => {
  it("Положительные", () => {
    const firstArg = 2;
    expect(plus(firstArg)(firstArg)).toBe(4);
  });

  it("Отрицательные", () => {
    const firstArg = 2;
    expect(plus(firstArg)(-5)).toBe(-3);
  });
});

describe("Проверка multiply", () => {
  it("Положительные", () => {
    const firstArg = 2;
    expect(multiply(firstArg)(firstArg)).toBe(4);
  });

  it("Отрицательные", () => {
    const firstArg = 2;
    expect(multiply(firstArg)(-5)).toBe(-10);
  });
});
