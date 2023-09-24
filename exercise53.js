// Function that takes an array of numbers and returns a new array containing only the positive numbers

function getpositiveNumbers(numbersArray) {
    const positiveNumbers = [];

    for(let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > 0) {
            positiveNumbers.push(numbersArray[i]);
        }
    }

    return positiveNumbers;
}

const numbers = [-5, -3, 0, 1, 3, 5];
const result = getpositiveNumbers(numbers);
console.log(result);