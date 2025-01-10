const maxGap = numbers => {
  const sorted = numbers.sort((a, b) => a - b); // Сортируем массив
  return sorted.reduce((max, num, i) =>
    i === 0 ? max : Math.max(max, Math.abs(num - sorted[i - 1])), 0
  );
};
