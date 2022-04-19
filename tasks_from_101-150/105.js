function toCsvText(array) {
    return array.filter(el=> ({...el})).join('\n')
}