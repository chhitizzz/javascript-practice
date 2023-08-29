// Function that takes an array of strings as input and returns the number of strings that have more than five characters

function stringsMoreThanFiveChars(stringArray) {
    let count = 0;

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > 5) {
            count ++;
        }
    }
    return count; 
}