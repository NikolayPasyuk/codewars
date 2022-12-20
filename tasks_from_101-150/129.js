function sumSquares(array) {
    return array.map(el => el ** 2).reduce((acc, cur) => acc + cur)
}