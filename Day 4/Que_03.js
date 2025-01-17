// Given an array of numbers, use an arrow function to create a new array that contains the squares of those numbers. For example, if the input is [1, 2, 3], the output should be [1, 4, 9].

const arr = [1,2,3,4,5,6];

const squareArr = (arr) => arr.map(a => a*a);
console.log(squareArr(arr));