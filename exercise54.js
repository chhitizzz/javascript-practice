// Function that converts the first letter of each word in a sentence to uppercase

function capitalizeFirstLetterOfEachWord(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }
  
    return capitalizedWords.join(' ');
  }
  
const sentence = "hello world! how are you?";
const capitalizedSentence = capitalizeFirstLetterOfEachWord(sentence);
console.log(capitalizedSentence); // Output: "Hello World! How Are You?"