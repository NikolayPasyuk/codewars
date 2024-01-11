const switcheroo = (x) => x.split('').map(char => char === 'a' ? 'b' :
  (char === 'b' ? 'a' : char)).join('');

