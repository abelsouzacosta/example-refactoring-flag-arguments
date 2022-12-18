export let acquireReading = () => ({
  customer: "Ivan",
  quantity: 10,
  month: 5,
  year: 2022,
});

let taxThreshold = (year: number) => 5 - Math.floor(year / 1000);

// todo: [refactor] encapsulate fields
// at this moment all functions in the code base deals with the same set of arguments
// so, its necessary to create an class to encapsulate these fields
// we can create a class to deal with all infomation needed

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

export function taxableCharge(baseCharge: number, year: number): number {
  return Math.max(0, baseCharge) - taxThreshold(year);
}
