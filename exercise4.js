// Function that takes a number as input and checks if it is positive, negative, or zero. Return "Positive," "Negative," or "Zero" accordingly

function checkNumber(number) {
    if (number > 0) {
        return 'The number is positive.';
    } else if (number == 0) {
        return 'The number is zero.';
    } else {
        return 'The number is negative.';
    }
}