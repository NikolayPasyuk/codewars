const paul = (x) => {
  const points = {kata: 5, "Petes kata": 10, life: 0, eating: 1};
  const totalPoints = x.reduce((sum, activity) => sum + points[activity], 0);

  return totalPoints < 40 ? 'Super happy!' : totalPoints < 70 ? 'Happy!'
    : totalPoints < 100 ? 'Sad!' : 'Miserable!';
};
