// Function that takes a number as input and checks if it is even. If it's even, return "Even," otherwise return "Odd".

function evenOddComparison(number) {
    if (number % 2 === 0) {
        return 'The number is even.';
    } else {
        return 'The number is odd.';
    }
} 

console.log(evenOddComparison(4)); // Output: The number is even.
console.log(evenOddComparison(11)); // Output: The number is odd. 