const findDigit = (num, nth) => {
  if (nth <= 0) {
    return -1
  }

  const numStr = Math.abs(num).toString()

  if (nth > numStr.length) {
    return 0
  }
  return parseInt(numStr[numStr.length - nth], 10)
}
