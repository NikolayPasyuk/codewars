const validateSequence = x => x.length >= 3 && x.every((num, index) =>
  index === 0 || num - x[index - 1] === x[1] - x[0]);

