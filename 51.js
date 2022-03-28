function betterThanAverage(classPoints, yourPoints) {
    const mean = classPoints.reduce((sum, el) => sum + el) / classPoints.length
    return yourPoints >= mean ? true : false
}
