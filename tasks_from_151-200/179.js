const meanVsMedian = numbers => {
  const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const median = sortedNumbers[Math.floor(numbers.length / 2)];

  return mean > median ? 'mean' : mean < median ? 'median' : 'same';
};