const toTime = seconds => {
  const [hours, minutes] = [Math.floor(seconds / 3600), Math.floor((seconds % 3600) / 60)];
  return `${hours} hour(s) and ${minutes} minute(s)`;
};
