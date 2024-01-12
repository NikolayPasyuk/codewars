const seaSick = x => {
  let changes = 0;

  for (let i = 1; i < x.length; i++) {
    if (x[i] !== x[i - 1]) {
      changes++;
    }
  }

  return changes / x.length > 0.2 ? "Throw Up" : "No Problem";
};
