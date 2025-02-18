function findSumOfArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            sum += array[i];
        } else if (Array.isArray(array[i])) {
            sum += findSumOfArray(array[i]); // Recursively sum nested arrays
        }
    }
    return sum;
}

console.log(findSumOfArray([10, 1, 2, [5, 4, [3, 1], 10, 11], 6, 7, 8, [1, 2, 3, 4], 10]));
