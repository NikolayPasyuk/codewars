function sumArray(array) {
    if (array !== null && array !== undefined && array.length > 2) {
        const newArray = array.sort((a, b) => a - b).filter((el, i) => i !== 0 && i < array.length - 1)
        return newArray.reduce((sum, el) => sum + el)
    } else {
        return 0
    }
}