const isSortedAndHow = array => {
  const ascending = array.slice().sort((a, b) => a - b).join('');
  const descending = array.slice().sort((a, b) => b - a).join('');

  return ascending === array.join('') ? "yes, ascending" :
    descending === array.join('') ? "yes, descending" : "no";
}
