const sumOfMinimums = arr => arr.map(row => Math.min(...row)).reduce((acc, curr) =>
  acc + curr, 0);
