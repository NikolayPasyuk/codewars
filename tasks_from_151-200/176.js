const insertDash = num => {
  const numStr = num.toString();
  const numArray = numStr.split('');

  const result = numArray.reduce((acc, digit, index) => {
    acc += digit;

    if (parseInt(digit) % 2 !== 0 && parseInt(numArray[index + 1]) % 2 !== 0 && index < numArray.length - 1) {
      acc += '-';
    }
    return acc;
  }, '');
  return result;
};
