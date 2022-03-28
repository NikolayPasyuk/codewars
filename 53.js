function sumMix(x) {
    const array = x.map(el => Number(el))
    return array.reduce((sum, el) => sum + el)
}