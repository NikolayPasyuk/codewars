let repeatIt = function (str, n) {
    const array = []
    if (typeof str === 'string') {
        for (let i = 0; i < n; i++) {
            array.push(str)
        }
    } else {
        return "Not a string"
    }
    return array.join('')
}