const arithmeticSequenceElements = (a, d, n) => {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(a + i * d);
  }

  return result.join(", ");
}
