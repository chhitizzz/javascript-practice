// Function that takes a number as input and checks if it is divisible by both 3 and 5. Return true if it is, false otherwise

function divisible(number) {
    if (number % 3 && number % 5 == 0) {
        return number + "is divisible by both 3 and 5";
    }
}

console.log(divisible(15));