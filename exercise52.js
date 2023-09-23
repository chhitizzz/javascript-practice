// Function that takes an array of numbers and returns the sum of all the elements

function arraySum(numberArray) {
    let sum = 0;

    for(let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];
    }

    return sum;
}