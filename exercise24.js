// Function that takes an array of numbers as input and returns the product of all the numbers

function arrayProduct(numbers) {
    let total = 1;
    for (let i = 1; i < numbers.length; i++) {
        total *= numbers[i];
    }
    return total;
}

const numberArray = [1, 2, 3, 4, 5, 6];
const product = arrayProduct(numberArray);
console.log(product); // Output: 720