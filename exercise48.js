// Function that checks if a given word is a palindrome (reads the same forwards and backwards)

function palindromeCheck (word) {
    const newWord = word.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    const reverseWord = newWord.split('').reverse().join('');

    return newWord === reverseWord;
}