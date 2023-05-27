
function sum(arr) {
    const sorted = arr.sort((a, b) => a - b);
    return sorted[0] + sorted[sorted.length - 1];
};

console.log(sum([1, 2, 3, 4, 43, 7, 8, 9, 10])); // 11

