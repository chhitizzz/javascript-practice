// Function that takes two numbers as input and returns the larger of the two

function largerNumber(x, y) {
    if (x > y) {
        return 'The larger number is ' + x;
    } else {
        return 'The larger number is ' + y;
    }
}

const result = largerNumber(7, 6);
console.log(result);