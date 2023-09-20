// Function that counts the number of vowels in each string

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for(let i = 0; i < str.lenght; i++) {
        if(vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}