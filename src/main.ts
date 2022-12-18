export let acquireReading = () => ({
  customer: "Ivan",
  quantity: 10,
  month: 5,
  year: 2022,
});

let taxThreshold = (year: number) => 5 - Math.floor(year / 1000);

// todo: [refactor] extract function
export let taxableCharge = (baseCharge: number, year: number) =>
  Math.max(0, baseCharge) - taxThreshold(year);

export function baseRate(month: number, year: number): number {
  return Math.floor(year / 1000) + month;
}

export function baseCharge(
  month: number,
  year: number,
  quantity: number
): number {
  return baseRate(month, year) * quantity;
}
