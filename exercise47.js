// Function to calculate the factorial of a given non-negative integer. The factorial of a non-negative integer `n` is the product of all positive integers less than or equal to `n`

function calculateFactorial(number) {
    if (number < 0) {
        return "Number cannot be negative";
    } else if (number === 0 || number === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <=number; i++) {
            result *= i;
        }
        return result;
    }
}

factorialResult = calculateFactorial(5);
console.log(factorialResult); // Output: 120