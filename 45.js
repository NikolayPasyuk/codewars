function getAverage(marks){
    const mean = marks.reduce((a, b) => (a + b)) / marks.length;
    return Math.floor(mean)
}