const leastLarger = (a, i) => a.map((value, index) =>
  value > a[i] ? index : -1)
  .filter(index => index !== -1)
  .reduce((minIdx, currentIdx) => (minIdx === -1 || a[currentIdx] < a[minIdx]
    ? currentIdx : minIdx), -1);
