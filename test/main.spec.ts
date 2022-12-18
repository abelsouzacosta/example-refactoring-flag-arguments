import { acquireReading, baseRate } from "../src/main";

describe("acquireReading", () => {
  it("should return an valid object", () => {
    let reading = acquireReading();

    expect(reading).toStrictEqual({
      customer: "Ivan",
      quantity: 10,
      month: 5,
      year: 2022,
    });
  });
});

describe("baseRate", () => {
  it("should return 7 with year = 2022 and month = 5", () => {
    let result = baseRate(5, 2022);

    expect(result).toEqual(7);
  });
});
