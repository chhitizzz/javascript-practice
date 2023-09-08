// Function that takes an array of book objects as input and returns an array with only the book titles

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

console.log(booksArray[0].title);   // Output: "The Catcher in the Rye"
console.log(booksArray[1].author);  // Output: "Harper Lee"

for (let i = 0; i < booksArray.length; i++) {
  console.log(booksArray[i].title);
}