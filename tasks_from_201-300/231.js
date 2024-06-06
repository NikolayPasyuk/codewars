const divCon = x => x.reduce((total, current) =>
  typeof current === 'number' ? total + current : total - Number(current), 0);
