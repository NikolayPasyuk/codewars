const gordon = (a) => a.split(' ').map(word => [...word.toUpperCase()]
  .map(c => c === 'A' ? '@' : 'AEIOU'.includes(c) ? '*' : c).join('') + '!!!!').join(' ');
