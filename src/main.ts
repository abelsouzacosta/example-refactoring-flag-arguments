export let acquireReading = () => ({
  customer: "Ivan",
  quantity: 10,
  month: 5,
  year: 2022,
});

export let baseRate = (month: number, year: number) =>
  Math.floor(year / 1000) + month;
