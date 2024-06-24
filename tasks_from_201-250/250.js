const allContinents = (list) =>
  ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].every(x =>
    list.some(y => x === y.continent));
