const countDevelopers = list => list.filter(dev => dev.continent === 'Europe' &&
  dev.language === 'JavaScript').length;
