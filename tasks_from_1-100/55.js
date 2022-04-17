function feast(beast, dish) {
    const firstLetterBeast = [...beast.split('')].shift()
    const lastLetterBeast = [...beast.split('')].pop()
    const firstLetterDish = [...dish.split('')].shift()
    const lastLetterDish = [...dish.split('')].pop()
    if (firstLetterBeast === firstLetterDish && lastLetterBeast === lastLetterDish) {
        return true
    } else {
        return false
    }
}