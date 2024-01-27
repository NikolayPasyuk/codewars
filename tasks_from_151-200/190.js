const gimme = (triplet) => triplet.indexOf(triplet.slice().sort((a, b) => a - b)[1]);
