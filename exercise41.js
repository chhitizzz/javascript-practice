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
  