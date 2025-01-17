// Use an arrow function to reverse a given string. For example, if the input is "hello", the output should be "olleh".
const str = "Hello";
const reverseStr = (str) => str.split("").reverse().join("");
console.log(reverseStr(str));

// Question 5:Create a chainable object using arrow functions that allows you to set a value and then add or multiply it by a number.

const result = chainable(3).add(2).multiply(2).value();
console.log(result); 