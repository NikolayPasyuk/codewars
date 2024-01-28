const boredom = staff => {
  const boredomScores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25
  };
  const cumulativeScore = Object.values(staff).reduce((sum, department) => sum + boredomScores[department], 0);
  return cumulativeScore <= 80 ? 'kill me now' : cumulativeScore < 100 ? 'i can handle this' : 'party time!!';
};

