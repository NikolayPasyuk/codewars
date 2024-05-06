const evenLast = numbers => numbers.reduce((acc, curr, index) => index % 2 === 0 ?
  acc + curr : acc, 0) * (numbers[numbers.length - 1] || 0);
