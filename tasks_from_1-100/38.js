var min = function (list) {
    const minNumber = list.sort((a, b) => a - b)
    return minNumber[0];
}

var max = function (list) {
    const maxNumber = list.sort((a, b) => b - a)
    return maxNumber[0];
}