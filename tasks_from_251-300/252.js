const tidyNumber = n => {
  const str = n.toString();
  return [...str].every((digit, i) => i === 0 || digit >= str[i - 1]);
};
