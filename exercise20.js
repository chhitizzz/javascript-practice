// Program that iterates over an array of objects representing people (with name and age properties) and prints their names to the console

const peopleArray = [
    {name: "Rashford", age: 25},
    {name: "Bruno", age: 28},
    {name: "Varane", age: 30},
];

for (let i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}