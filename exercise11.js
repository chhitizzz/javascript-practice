// Function that takes a year as input and checks if it's a leap year. Return true if it's a leap year, false otherwise

function checkLeapYear(year) {
    if (year % 400 === 0 && year % 100 === 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkLeapYear(2000)); // Output: true
console.log(checkLeapYear(2003)); // Output: false
console.log(checkLeapYear(2008)); // Output: true