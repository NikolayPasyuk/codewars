const oddOrEven = array => array.reduce((acc, curr) => acc + curr, 0) % 2 === 0 ?
  "even" : "odd";