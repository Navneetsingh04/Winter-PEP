// Create a function createMessage that takes a default message and an indefinite number of names. The function should return an array of personalized messages for each name.

function createMessage(message = "Hello", ...names){
    return names.map(name => `${message} ${name}`);
}
console.log(createMessage("Hello", "Gurmkuh", "Pritesh", "Ratan", "Rahul"));


// Que-5: Define a function sum that takes three numbers as parameters and returns their sum. Use the spread operator to call this function with an array of numbers.

function sum(a,b,c){
    return a+b+c;
}
const arr = [1,2,3,4,5];
console.log(sum(...arr));
