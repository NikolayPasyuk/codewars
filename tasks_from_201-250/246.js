const getFirstPython = list => {
  const pythonDeveloper = list.find(({language}) => language === 'Python');
  return pythonDeveloper ? `${pythonDeveloper.firstName}, ${pythonDeveloper.country}` :
    'There will be no Python developers';
};
