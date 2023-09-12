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
    { make: "Toyota", model: "Camry", year: 2021 },
    { make: "Honda", model: "Civic", year: 2023 },
    { make: "Ford", model: "Focus", year: 2022 },
    { make: "Chevrolet", model: "Malibu", year: 2023 }
];
  
const targetYear = 2023;
const numberOfCars = countCarsByYear(carsArray, targetYear);
console.log(`Number of cars from ${targetYear}: ${numberOfCars}`); // Output: Number of cars from 2023: 2