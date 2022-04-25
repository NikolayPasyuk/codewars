function whoIsPaying(name) {
    return name.length <= 2 ? name.split() : [name, name.slice(0, 2)]
}