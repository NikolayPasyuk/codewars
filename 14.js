function arrayPlusArray(arr1, arr2) {
    sumOfArr1 = arr1.reduce((sum, el) => sum + el, 0);
    sumOfArr2 = arr2.reduce((sum, el) => sum + el, 0);
    return sumOfArr1 + sumOfArr2;
}
