// Function that takes an array of book objects as input and returns the total number of years (sum of years) for all books

function totalYear(booksArray) {
    let totalYears = 0;

    for (let i = 0; i < booksArray.length; i++) {
        totalYears += booksArray[i].year;
    }

    return totalYears;
}

const booksArray = [
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949
    }
  ];

const result = totalYear(booksArray);
console.log(result); // Output: 5860