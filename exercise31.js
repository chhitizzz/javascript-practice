// Function that takes an array of strings as input and returns a new array with the strings reversed

function reverseStrings(stringsArray) {
    const reverseArray = [];

    for(let i = 0; i < stringsArray.length; i++) {
        const originalString = stringsArray[i];
        const reverseString = originalString.split('').reverse('').join('');
        reverseArray.push(reverseArray);
    }

    return reverseArray;
}