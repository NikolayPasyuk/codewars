function powersOfTwo(n) {
    const array = []
    for (let i = 0; i <= n; i++) {
        array.push(Math.pow(2, i))
    }
    return array
}