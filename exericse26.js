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

