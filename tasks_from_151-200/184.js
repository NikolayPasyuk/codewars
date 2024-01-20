const smaller = nums => nums.map((num, i) => nums.slice(i + 1).filter(x => x < num).length);
