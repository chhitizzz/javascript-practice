// Function that takes a car object as input and returns a string with the make, model, and year combined (e.g., "Toyota Corolla 2022")

function carDetails (car) {
    return `${car.make} ${car.model} ${car.year}`;
}

const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2022
};

const result = carDetails(car);
console.log(result); // Output: Toyota Corolla 2022