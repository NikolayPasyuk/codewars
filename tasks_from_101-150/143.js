function squareSum(numbers) {
    return numbers.length > 0 ? numbers.reduce((sum, elem) => {
        return sum + Math.pow(elem, 2)
    }, 0) : 0
}