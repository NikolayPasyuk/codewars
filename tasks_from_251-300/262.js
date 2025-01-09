const checkThreeAndTwo = array => {
  const counts = ['a', 'b', 'c'].map(char => array.filter(item => item === char).length);
  return counts.includes(3) && counts.includes(2);
};
