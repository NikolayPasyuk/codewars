let findAverage = function (nums) {
    return nums.reduce((sum, el) => el + sum) / nums.length
}