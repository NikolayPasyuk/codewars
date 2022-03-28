class SmallestIntegerFinder {
    findSmallestInt(args) {
        const sortArgs = args.sort((a, b) => a - b)
        return sortArgs[0]
    }
}