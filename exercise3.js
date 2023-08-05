// Function that takes an array of numbers as input and returns the sum of all the numbers in the array

function arraySum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

const numberArray = [10, 20, 30, 40, 50];
const sum = arraySum(numberArray);
console.log(sum);