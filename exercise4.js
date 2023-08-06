// Function that takes a number as input and checks if it is positive, negative, or zero. Return "Positive," "Negative," or "Zero" accordingly

function checkNumber(number) {
    if (number > 0) {
        return 'The number is positive.';
    } else if (number < 0) {
        return 'The number is negative.';
    } else {
        return 'The number is zero.';
    }
}

console.log(checkNumber(10)); // The number is positive.
console.log(checkNumber(-5)); // The number is negative.
console.log(checkNumber(0)); // The number is zero.