// Function that takes a year as input and checks if it's a leap year. Return true if it's a leap year, false otherwise

function checkLeapYear(year) {
    if (year % 400 === 0 && year % 100 === 0) {
        return year + ' is a leap year.';
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return year + ' is a leap year.';
    } else {
        return year + ' is not a leap year.';
    }
}