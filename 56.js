function findLongest(str) {

    let spl = str.split(" ");
    let longest = ''

    for (let i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
            longest = spl[i].length
        }
    }
    return longest
}