// Create a function mergeArrays that takes two arrays as parameters and returns a new array that combines both arrays using the spread operator.

function mergeArrys(arr1,arr2){
    return [...arr1,...arr2];
}
console.log(mergeArrys([1,2,3],[4,5,6]));