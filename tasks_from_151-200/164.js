const getMissingElement = (superImportantArray) => {
  for (let i = 0; i <= 9; i++) {
    if (!superImportantArray.includes(i)) {
      return i;
    }
  }
};
