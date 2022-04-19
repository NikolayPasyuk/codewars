function pickIt(arr) {
    const odd = [], even = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i] !== undefined) {
            odd.push(arr[i])
        } else if (arr[i] % 2 === 0 && arr[i] !== undefined) {
            even.push(arr[i])
        }
    }
    return [odd, even];
}