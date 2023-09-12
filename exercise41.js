// Function that takes an array of car objects as input and returns the number of cars that are from a specific year

function countCarsByYear(carsArray, targetYear) {
    let count = 0;
  
    for (let i = 0; i < carsArray.length; i++) {
      if (carsArray[i].year === targetYear) {
        count++;
      }
    }
  
    return count;
  }
  
const carsArray = [
    { make: "Toyota", model: "Camry", year: 2022 },
    { make: "Honda", model: "Civic", year: 2022 },
    { make: "Ford", model: "Focus", year: 2020 },
    { make: "Chevrolet", model: "Malibu", year: 2022 }
];
  
const targetYear = 2022;
const numberOfCars = countCarsByYear(carsArray, targetYear);
console.log(`Number of cars from ${targetYear}: ${numberOfCars}`);