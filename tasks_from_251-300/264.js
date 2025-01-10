const getAverageAge = list => Math.round(list.reduce((sum, developer) =>
  sum + developer.age, 0) / list.length);
