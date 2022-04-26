function cookie(x) {
    let cookies = 'Who ate the last cookie? It was'
    return typeof x === "string" ? `${cookies} Zach!`
        : typeof x === "number" ? `${cookies} Monica!`
            : `${cookies} the dog!`
}