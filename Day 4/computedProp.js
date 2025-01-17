// computed property name is a feature that allows you to create an object with dynamic keys.
// using computed property names in object literals and class declarations.
// it used when the key is not known until runtime.

const propName = 'c';
const rank = {
    a : 1,
    b : 2,
    [propName] : 3,
};
console.log(rank.c); 

