// Function that takes three numbers as input and returns the largest of the three without using the built-in `Math.max()` method

function largestOfThreeNumbers(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1 + ' is the largest number.';
    } else if (num2 > num1 && num2 > num3) {
        return num2 + ' is the largest number.';
    } else {
        return num3 + ' is the largest number.';
    }
}

console.log(largestOfThreeNumbers(1, 2, 3)); // Output: 3 is the largest number. 
console.log(largestOfThreeNumbers(7, 6, 5)); // Output: 7 is the largest number.  
console.log(largestOfThreeNumbers(10, 11, 9)); // Output: 11 is the largest number. 