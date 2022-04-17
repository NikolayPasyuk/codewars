function find_average(array) {
    if (array.length > 0) {
        return array.reduce((sum, el) => sum + el) / array.length
    } else if (array.length <= 0) {
        return 0
    }
}