const alan = (x) => {
  const expectedStops = ["Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway"];
  return expectedStops.every(stop => x.includes(stop)) ? "Smell my cheese you mother!"
    : "No, seriously, run. You will miss it.";
}