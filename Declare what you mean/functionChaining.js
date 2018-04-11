
//deduct 1 from each number then filter those one that are divisible on 3 with remainder 0 and get their total sum
const bundleNumbers = [5, 10, 15, 17, 21, 43, 55, 66, 75, 13, 5, 13, 8, 12, 10, 11];
const neededNumbersSum = bundleNumbers
    .map(n => n - 1)//-1
    .filter(n => n % 3 === 0)// % 3 =0
    .reduce((a, b) => a + b, 0); // totalSum





