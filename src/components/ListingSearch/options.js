export const MAX_PRICE_OPTIONS = [
  { option: 'No Max', value: 0 },
  { option: '£50,000', value: 50000 },
  { option: '£60,000', value: 60000 },
  { option: '£70,000', value: 70000 },
  { option: '£80,000', value: 80000 },
  { option: '£90,000', value: 90000 },
  { option: '£100,000', value: 100000 },
  { option: '£150,000', value: 150000 },
  { option: '£200,000', value: 200000 },
  { option: '£300,000', value: 300000 },
  { option: '£350,000', value: 350000 },
  { option: '£400,000', value: 400000 },
  { option: '£450,000', value: 450000 },
  { option: '£500,000', value: 500000 },
  { option: '£600,000', value: 600000 },
  { option: '£700,000', value: 700000 },
  { option: '£800,000', value: 800000 },
  { option: '£900,000', value: 900000 },
  { option: '£1,000,000', value: 1000000 },
  { option: '£1,250,000', value: 1250000 },
  { option: '£1,500,000', value: 1500000 },
  { option: '£1,750,000', value: 1750000 },
  { option: '£2,000,000', value: 2000000 },
  { option: '£3,000,000', value: 3000000 },
  { option: '£4,000,000', value: 4000000 },
  { option: '£5,000,000', value: 5000000 },
  { option: '£7,500,000', value: 7500000 },
  { option: '£10,000,000', value: 10000000 },
];

export const MIN_PRICE_OPTIONS = [
  { option: 'No Min', value: 0 },
  ...MAX_PRICE_OPTIONS.slice(1),
];

export const BEDROOM_OPTIONS = [
  { option: 'No Min', value: 0 },
  { option: '1+', value: 1 },
  { option: '2+', value: 2 },
  { option: '3+', value: 3 },
  { option: '4+', value: 4 },
  { option: '5+', value: 5 },
  { option: '6+', value: 6 },
  { option: '7+', value: 7 },
  { option: '8+', value: 8 },
  { option: '9+', value: 9 },
  { option: '10+', value: 10 },
];
