// Function that takes a number as input and returns "Fizz" if the number is divisible by 3, "Buzz" if it's divisible by 5, and "FizzBuzz" if it's divisible by both 3 and 5. Otherwise, return the number itself

function divisibleNumber(number) {
    if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else if (number % 3 && number % 5 === 0) {
        return 'FizzBuzz';
    } else {
        return number;
    }
}