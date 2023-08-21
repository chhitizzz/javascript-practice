// Function that takes a number as input and checks if it's a prime number using a loop. Return true if it's prime, false otherwise

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return false; 
        }
    }

    return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(14)); // Output: false