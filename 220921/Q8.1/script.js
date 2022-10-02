// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
// 2. Then write a function that has one argument, a book, that
// will return the following description from your book object:
//     ‘The book <book name> was written by <author name> in
// the year <publishing year>

// 1. Create an object that represents a book. It should have
// 4-5 properties that make sense for a book to have.
const bookObj = {
    BookName: "The Hobbit",
    Author:"J. R. R. Tolkien",
    OriginalLanguage:"English",
    FirstPublished:"1937",
    Genre:"Fantasy",
};

// 2. Then write a function that has one argument, a book, that
// will return the following description from your book object:
//     ‘The book <book name> was written by <author name> in
// the year <publishing year>
const bookFunction = (bookObject) => {
return `The ${bookObject.Genre} book ${bookObject.BookName}, was written by ${bookObject.Author} and was first released in the year ${bookObject.FirstPublished}`;
}

console.log(bookFunction(bookObj));