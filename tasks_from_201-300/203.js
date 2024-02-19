const solve = (a, b) => {
  const aliceTotal = a.reduce((t, s, i) => t + (s > b[i]), 0);
  const bobTotal = b.reduce((t, s, i) => t + (s > a[i]), 0);
  return `${aliceTotal}, ${bobTotal}: ${aliceTotal > bobTotal ? 'Alice made "Kurt" proud!' : bobTotal > aliceTotal ? 'Bob made "Jeff" proud!' : 'that looks like a "draw"! Rock on!'}`;
};