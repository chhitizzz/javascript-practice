// Function that takes an array of numbers as input and returns the product of all the numbers

function arrayProduct(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total *= numbers[i];
    }
    return total;
}