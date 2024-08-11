const myLanguages = results =>
  Object.entries(results)
    .filter(([_, score]) => score >= 60)
    .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
    .map(([language]) => language);
