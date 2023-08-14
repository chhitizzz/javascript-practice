// Function that takes an array of numbers as input and returns the number of positive, negative, and zero values in the array as an object

function countPositiveNegativeZero(numbers) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > 0) {
            positive++;
        } else if (numbers[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }

    return {
        positive: positive,
        negative: negative,
        zero: zero
    };
}