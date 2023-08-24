// Program that iterates over an array of numbers and returns a new array with each number squared

const numbersArray = [2, 4, 6, 8, 10];
const squaredArray = [];

for (let i = 0; i < numbersArray.length; i++) {
    squaredArray.push(numbersArray[i] * numbersArray[i]);
}

console.log(squaredArray);