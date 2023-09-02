// Function that takes an array of strings as input and returns a new array with the strings reversed

function reverseStrings(stringsArray) {
    const reverseArray = [];

    for(let i = 0; i < stringsArray.length; i++) {
        const originalString = stringsArray[i];
        const reverseString = originalString.split('').reverse('').join('');
        reverseArray.push(reverseString);
    }

    return reverseArray;
}

const stringsArray = ['hello', 'manchester', 'neeva'];
const result = reverseStrings(stringsArray);
console.log(result); // Output: [ 'olleh', 'retsehcnam', 'aveen' ]