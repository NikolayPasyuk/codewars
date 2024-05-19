const diff = (a, b) => {
  const setA = new Set(a);
  const setB = new Set(b);

  const difference = [
    ...[...setA].filter(item => !setB.has(item)),
    ...[...setB].filter(item => !setA.has(item))
  ];

  return difference.sort();
};
