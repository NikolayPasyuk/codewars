function abbrevName(name) {
    const array = name.toUpperCase().split(' ')
    return array.map((el, i) => {
        if (i === 0) {
            return el[0]
        } else if (i === 1) {
            return el[0]
        }
    }).join('.')
}