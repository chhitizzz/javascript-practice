// Function that takes an array of strings as input and returns a new array with the strings sorted in alphabetical order

function alphabeticalOrderStrings(stringsArray) {
    const sortedArray = stringsArray.slice().sort();
    return sortedArray;
}

const stringsArray = ['football', 'basketball', 'tennis', 'cricket'];
const result = alphabeticalOrderStrings(stringsArray);
console.log(result); // Output: [ 'basketball', 'cricket', 'football', 'tennis' ]