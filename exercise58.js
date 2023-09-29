// Function that generates the nth number in the Fibonacci sequence

function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
  
    let fibPrev = 0;
    let fibCurrent = 1;
  
    for (let i = 2; i <= n; i++) {
      const temp = fibCurrent;
      fibCurrent = fibPrev + fibCurrent;
      fibPrev = temp;
    }
  
    return fibCurrent;
  }
  
console.log(fibonacci(6));  // Output: 8 