const swapHeadAndTail = (arr) => {
  const length = arr.length;
  const middle = Math.floor(length / 2);

  for (let i = 0; i < middle; i++) {
    const temp = arr[i];
    arr[i] = arr[middle + i + (length % 2)];
    arr[middle + i + (length % 2)] = temp;
  }
  return arr;
}
