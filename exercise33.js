// Function that takes an array of numbers as input and returns a new array with only unique values (no duplicates)

function removeDuplicates(numbersArray) {
    const uniqueNumbersSet = new Set(numbersArray);

    const uniqueNumbersArray = Array.from(uniqueNumbersSet);

    return uniqueNumbersArray;
}

const numbersArray = [10, 10, 10, 20, 30, 30, 40, 50, 60, 60];
const result = removeDuplicates(numbersArray);
console.log(result);