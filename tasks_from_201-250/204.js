const getNewNotes = (salary, bills) => {
  const disposableIncome = salary - bills.reduce((total, bill) => total + bill, 0);
  return disposableIncome <= 0 ? 0 : Math.floor(disposableIncome / 5);
};