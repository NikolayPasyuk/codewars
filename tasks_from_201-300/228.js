const haikuWizard = arr =>
  arr.map(line =>
    line.map(num => words[Math.floor(num / 10) - 1][num % 10]).join(' ')
  ).join('\n');
