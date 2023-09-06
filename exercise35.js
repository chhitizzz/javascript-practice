// Function that takes an object (representing a person) as input and prints their name and age to the console

function personObject(person) {
    if (person && person.name && person.age) {
        console.log('Name: ${person.name}');
        console.log('Age: ${person.age}');
    } else {
        console.log('Invalid person object. Make sure it has name and age properties.');
    }
}