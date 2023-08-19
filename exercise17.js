// Function that takes an array of numbers as input and calculates the sum of all the numbers using a loop

function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum; 
}

const numberArray = [10, 20, 30, 40, 50];
const sum = calculateSum(numberArray);
console.log(sum);