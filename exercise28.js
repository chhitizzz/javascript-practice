// Function that takes an array of numbers as input and returns the largest number in the array

function largestNumber(numberArray) {
    let largest = numberArray[0];

    for(let i = 1;i < numberArray.length; i++) {
        if(numberArray[i] > largest) {
            largest = numberArray[i];
        }
    }
    return largest;
}

const numberArray = [12, 18, 6, 30, 24];
const result = largestNumber(numberArray);
console.log(result);