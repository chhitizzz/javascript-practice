// Function that concatenates two arrays

function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = concatenateArrays(array1, array2);
console.log(concatenatedArray);  // Output: [1, 2, 3, 4, 5, 6]