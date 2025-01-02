const maxTriSum = numbers => [...new Set(numbers)].sort((a, b) => b - a)
  .slice(0, 3).reduce((sum, num) => sum + num, 0);
