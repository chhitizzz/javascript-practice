// Function that takes an array of numbers as input and returns a new array with only the even numbers

function evenNumbers(numbersArray) {
    const evenNumbersArray = [];

    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] % 2 === 0) {
            evenNumbersArray.push(numbersArray[i]);
        }
    }

    return evenNumbersArray
}

const numbersArray = [5, 10, 15, 20, 25, 30, 35, 40];
const result = evenNumbers(numbersArray);
console.log(result); // Output: [10, 20, 30, 40]