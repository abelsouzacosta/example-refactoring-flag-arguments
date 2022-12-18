import {
  acquireReading,
  baseRate,
  baseCharge,
  taxableCharge,
} from "../src/main";

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

describe("baseCharge", () => {
  it("should return 70 for quantity = 10", () => {
    let result = baseCharge(5, 2022, 10);

    expect(result).toEqual(70);
  });
});

describe("taxableCharge", () => {
  let result = taxableCharge(70, 2022);

  expect(result).toEqual(67);
});
