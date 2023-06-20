function splitAndMerge(string, separator) {
    const words = string.split(' ');
    console.log(words)

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').join(separator);
        console.log(words[i])
    }

    return words.join(' ');
}
