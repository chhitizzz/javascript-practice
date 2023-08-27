// Function that takes an array of strings as input and returns a new array with all the strings in uppercase

function arrayUppercase(strings) {
    const upperCaseArray = [];

    for (let i = 0; i < strings.length; i++) {
        upperCaseArray.push(strings[i].toUpperCase());
    }
    return upperCaseArray;
}