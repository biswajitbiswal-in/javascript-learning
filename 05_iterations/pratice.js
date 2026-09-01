const numbers = [1, 2, 3, 4, 5];

const value = numbers.map((num) => num * 3)
// console.log(value);

const num = [1,2,3,4,5,6,7,89,10]
// const filterNums = num.filter((num) => num > 10)
// console.log(filterNums);
const sum = num.reduce((acc,curr) => acc + curr, 0)
console.log(sum);

