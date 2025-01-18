// Use an arrow function to reverse a given string. For example, if the input is "hello", the output should be "olleh".
const str = "Hello";
const reverseStr = (str) => str.split("").reverse().join("");
console.log(reverseStr(str));

// Question 5:Create a chainable object using arrow functions that allows you to set a value and then add or multiply it by a number.

const result = (() => {
    let val  = 0;

    return {
        set : (num) => {
            val = num;
            return result;
        },
        add : (num) => {
            val += num;
            return result;
        },
        multiply : (num) =>{
            val *= num;
            return result;
        },
        getResult : () => val
    };
})();

const ans = result.set(10).add(4).multiply(9).getResult();
console.log(ans);