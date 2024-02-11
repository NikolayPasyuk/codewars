const capitals = (word) => word.split('').reduce((acc, letter, index) =>
  letter === letter.toUpperCase() ? [...acc, index] : acc, []);