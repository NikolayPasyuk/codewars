const arrayLeaders = numbers =>
  numbers.filter((num, index) =>
    num > numbers.slice(index + 1).reduce((acc, curr) => acc + curr, 0)
  );
