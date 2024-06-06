const countWins = (winnerList, country) =>
  winnerList.filter(winner => winner.country === country).length;
