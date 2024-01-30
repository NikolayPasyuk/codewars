const removeRotten = bagOfFruits => bagOfFruits ? bagOfFruits.map(fruit => fruit.replace(/^rotten/, '').toLowerCase()) : [];
