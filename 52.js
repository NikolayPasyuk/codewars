function sum(numbers) {
    "use strict";
    if (numbers.length > 0) {
        return numbers.reduce((sum, el) => sum + el)
    } else {
        return 0
    }
};