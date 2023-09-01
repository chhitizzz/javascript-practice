// Function that takes an array of numbers as input and returns the average of those numbers

function calculateAverage(numbersArray) {
    if (numbersArray === 0) {
        return 0;
    }

    const sum = numbersArray.reduce((acc, num) => acc + num, 0);
    const average = sum / numbersArray.length;

    return average;
}

