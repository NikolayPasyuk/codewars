const countLanguages = list => list.reduce((acc, developer) => {
  acc[developer.language] = (acc[developer.language] || 0) + 1;
  return acc;
}, {});
