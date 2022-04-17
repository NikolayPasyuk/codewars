function mergeArrays(arr1, arr2) {
    const concatArray = arr1.concat(arr2)
    return concatArray.filter((el, i) => concatArray.indexOf(el) === i).sort((a, b) => a - b)
}