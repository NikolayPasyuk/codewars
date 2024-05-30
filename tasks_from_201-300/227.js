const howMuchCoffee = events => {
  const coffeeCount = events
    .filter(event => ['cw', 'dog', 'cat', 'movie'].includes(event.toLowerCase()))
    .reduce((total, event) => total + (event === event.toUpperCase() ? 2 : 1), 0);

  return coffeeCount > 3 ? 'You need extra sleep' : coffeeCount;
};
