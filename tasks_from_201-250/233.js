const commonGround = (s1, s2) =>
  s2.split(` `).filter(val => s1.includes(val)).join(` `) || `death`;
