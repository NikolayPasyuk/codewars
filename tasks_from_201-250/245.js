const findDeletedNumber = (arr, mixArr) => arr.reduce((acc, num) => acc + num, 0) -
  mixArr.reduce((acc, num) => acc + num, 0);
