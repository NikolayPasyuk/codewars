const findMissing = (arr1, arr2) =>
  arr1.reduce((acc, val) => acc + val, 0) - arr2.reduce((acc, val) => acc + val, 0);
