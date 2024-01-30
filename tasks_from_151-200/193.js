const outed = (meet, boss) => {
  const totalScore = Object.values(meet).reduce((acc, score) => acc + score, 0) + meet[boss];
  const averageHappiness = totalScore / (Object.keys(meet).length);

  return averageHappiness <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
};
