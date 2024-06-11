const findMissingNumbers = arr => {
  let missing = [];
  for (let i = arr[0]; i < arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }
  return missing;
};
