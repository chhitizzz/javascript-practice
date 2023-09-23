// Function that takes an array of numbers and returns the sum of all the elements

function arraySum(numberArray) {
    let sum = 0;

    for(let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];
    }

    return sum;
}

const numbers = [10, 20, 30, 40, 50];
const result = arraySum(numbers);
console.log(result); // Output: 150