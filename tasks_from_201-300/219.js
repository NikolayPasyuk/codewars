const isAllPossibilities = arr =>
  arr.length === new Set(arr).size && arr.every((num, index) => arr.includes(index));
