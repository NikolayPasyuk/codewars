const removeSmallest = numbers => {
  const minIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_, index) => index !== minIndex);
};
