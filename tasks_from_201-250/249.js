const findSenior = list => list.sort((a, b) => b.age - a.age).filter(dev =>
  dev.age === list[0].age);
