function countSheeps(arrayOfSheep) {
    const present = arrayOfSheep.filter((sheep) => sheep);
    return present.length;
}
