const matrix = arr => arr.map((row, i) =>
  row.map((value, j) => (i === j && value < 0) ? 0 :
    (i === j) ? 1 : value)
);
