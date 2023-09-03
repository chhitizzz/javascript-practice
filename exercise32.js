// Function that takes two arrays as input and returns a new array with the elements of both arrays combined

function combineArray(array1, array2) {
    return array1.concat(array2);
}

const array1 = [10, 20, 30];
const array2 = [40, 50, 60];
const combinedArray = combineArray(array1, array2);
console.log(combinedArray); // Output: [ 10, 20, 30, 40, 50, 60 ]