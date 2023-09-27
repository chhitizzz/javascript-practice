// Function that checks if a given number is prime

function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
console.log(isPrime(11));  // Output: true
console.log(isPrime(16));  // Output: false