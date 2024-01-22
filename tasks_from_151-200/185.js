const scrollingText = (text) =>
  [...text.toUpperCase()].map((_, index, arr) =>
    arr.slice(index).join('') + arr.slice(0, index).join('')
  );
