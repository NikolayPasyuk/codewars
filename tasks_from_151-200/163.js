const inviteMoreWomen = L => {
  const menCount = L.filter(person => person === 1).length;
  const womenCount = L.length - menCount;
  return womenCount < menCount;
};
