function generateRange(min, max, step) {
    const array = []
    for (let i = min; i <= max; i= i + step) {
        array.push(i)
    }
    return array
}