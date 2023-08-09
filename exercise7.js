// Function that takes a number as input and checks if it is divisible by both 3 and 5. Return true if it is, false otherwise

function divisible(number) {
        return number % 3 === 0 && number % 5 === 0;
}

console.log(divisible(15)); // Output: true
console.log(divisible(10)); // Output: false