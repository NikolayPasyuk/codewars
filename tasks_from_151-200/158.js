function periodIsLate(last, today, cycleLength) {
    const oneDay = 1000 * 60 * 60 * 24;
    const diffTime = today.getTime() - last.getTime();
    const diffDays = Math.floor(diffTime / oneDay);
    return diffDays > cycleLength;
}