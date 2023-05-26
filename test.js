const targetValue = 5;
const arr1 = [1,3,5,6];
const indexNext = arr1.findIndex((item) => item > targetValue) || arr1.length;
const indexPrev = arr1.findIndex((item) => item < targetValue) || 0;
console.log(`${arr1[indexPrev]}, ${targetValue}, ${arr1[indexNext]}`);
