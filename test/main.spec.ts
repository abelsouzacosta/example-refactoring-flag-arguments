import { acquireReading } from "../src/main";

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
