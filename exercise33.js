// Function that takes an array of numbers as input and returns a new array with only unique values (no duplicates)

function removeDuplicates(numbersArray) {
    const uniqueNumbersSet = new Set(numbersArray);

    const uniqueNumbersArray = Array.from(uniqueNumbersSet);

    return uniqueNumbersArray;
}