function billboard(name, price = 30) {
    return name.split('').map(el => el = price).reduce((a, b) => a + b)
}