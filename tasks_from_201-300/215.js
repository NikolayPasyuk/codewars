const calc = x => {
  let total1 = [...x].map(char => char.charCodeAt(0)).join('');
  let total2 = total1.replace(/7/g, '1');
  return [...total1].reduce((a, b) => parseInt(a) + parseInt(b), 0) -
    [...total2].reduce((a, b) => parseInt(a) + parseInt(b), 0);
};
