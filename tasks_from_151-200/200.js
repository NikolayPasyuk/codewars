const oddOnesOut = nums => {
  const counts = nums.reduce((acc, num) => ({...acc, [num]: (acc[num] || 0) + 1}), {});
  return nums.filter(num => counts[num] % 2 === 0);
}