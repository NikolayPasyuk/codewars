const largest = (n, array) => array.sort((a, b) => b - a).slice(0, n).reverse();