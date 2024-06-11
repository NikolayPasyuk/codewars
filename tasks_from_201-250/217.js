const sumItUp = numbersWithBases => numbersWithBases.reduce((sum, [number, base]) =>
  sum + parseInt(number, base), 0);
