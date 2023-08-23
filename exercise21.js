// Function that takes a string as input and counts the number of occurrences of a specific character using a loop

function stringOccurrence(inputString, targetCharacter) {
    let count = 0;

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === targetCharacter) {
            count++;
        }
    }

    return count;
}