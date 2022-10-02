// 1. create 2 book objects with properties: name, author, year.
// 2. create an empty object bookUtils (utils = short for utilities).
// 3. add to the bookUtils object a function getFirstPublished,
// that receives 2 books and returns the book with the
// smaller year.
// 4. add to the bookUtils object a function setNewEdition, that
// receives a book and an edition year and sets a new
// property latestEdition with the edition year, or updates an
// existing one.
// 5. add to the bookUtils object a setLanguage function, that
// receives a book and a language and sets a new property
// language with the languahe, or updates an existing one.
// 6. add to the bookUtils object a setTranslation function, that
// receives a book a language and a translator, and sets a
// new property of translation, which is an object that
// contains the translator and the language.
// 7. add to the bookUtils object a setPublisher function, that
// receives a book a name and location, and sets a new
// property named publisher, which is an object that containsthe name and location.
// 8. add to the bookUtils object a function isSamePublisher,
// which receives 2 books and checks if the publisher name
// and location are identical in the 2 books.

const bookOne = {
  name: "A Tale of Two Cities",
  author: "Charles Dickens",
  year: 1859,
};
const bookTwo = {
  name: "The Little Prince",
  author: "Antoine de Saint-Exupéry",
  year: 1943,
};

const bookUtils = {
  getFirstPublished: function (bookA, bookB) {
    return Number(bookA.year) < Number(bookB.year) ? bookA : bookB;
  },
  setNewEdition: function (book, newYear) {
    book.latestEdition = newYear;
  },
  setLanguage: function (book, langVar) {
    book.language = langVar;
  },
  setTranslation: function (book, tranlator, language) {
    book.translation = { tranlator, language };
  },
  setPublisher: function (book, publishName, location) {
    book.publisher = { publishName, location };
  },
  isSamePublisher: function (bookA, bookB) {
    return bookA.publisher === bookB.publisher &&
      bookA.location === bookB.location
      ? true
      : false;
  },
};

bookUtils.setNewEdition(bookOne, 1984);
bookUtils.setNewEdition(bookTwo, 1999);
bookUtils.setLanguage(bookOne, "English");
bookUtils.setLanguage(bookTwo, "French");
bookUtils.setTranslation(bookOne, "Avi Ron", "Hindu");
bookUtils.setTranslation(bookTwo, "Eli Kopter", "Turkish");
bookUtils.setPublisher(bookOne, "Best Books LTD", "Bratislava");
bookUtils.setPublisher(bookTwo, "Worst Books MFG", "Aphganistan");
console.log(bookOne, bookTwo);
console.log("Same Publisher? ", bookUtils.isSamePublisher(bookOne, bookTwo));

// 1. create 2 book objects with properties: name, author, year.
// const bookOne = {
//   name: "A Tale of Two Cities",
//   author: "Charles Dickens",
//   year: 1859,
// };
// const bookTwo = {
//   name: "The Little Prince",
//   author: "Antoine de Saint-Exupéry",
//   year: 1943,
// };

// 2. create an empty object bookUtils (utils = short for utilities).

// const bookUtils = {
// }

// 3. add to the bookUtils object a function getFirstPublished,
// that receives 2 books and returns the book with the
// smaller year.

// const bookUtils = {
//   getFirstPublished: function (bookA, bookB) {
//     return Number(bookA.year) < Number(bookB.year) ? bookA : bookB;
//   },
// };

// console.log(bookUtils.getFirstPublished(bookOne, bookTwo));
// bookUtils.getFirstPublished(bookOne, bookTwo);

// 4. add to the bookUtils object a function setNewEdition, that
// receives a book and an edition year and sets a new
// property latestEdition with the edition year, or updates an
// existing one.

// const bookUtils = {
//   getFirstPublished: function (bookA, bookB) {
//     return Number(bookA.year) < Number(bookB.year) ? bookA : bookB;
//   },
//   setNewEdition: function (book, newYear) {
//     book.latestEdition = newYear;
//   },
// };

// bookUtils.setNewEdition(bookOne, 1984);
// bookUtils.setNewEdition(bookTwo, 1999);
// console.log(bookOne, bookTwo);

// Book	                 Author(s)	                  Original language	   published	   sales	        Genre
// A Tale of Two Cities	 Charles Dickens	            English	             1859	         200 million    Historical fiction
// The Little Prince	     Antoine de Saint-Exupéry	    French	             1943	         200 million	  Novella

// 5. add to the bookUtils object a setLanguage function, that
// receives a book and a language and sets a new property
// language with the languahe, or updates an existing one.

// const bookUtils = {
//   getFirstPublished: function (bookA, bookB) {
//     return Number(bookA.year) < Number(bookB.year) ? bookA : bookB;
//   },
//   setNewEdition: function (book, newYear) {
//     book.latestEdition = newYear;
//   },
//   setLanguage: function (book, langVar) {
//     book.language = langVar;
//   },
// };

// bookUtils.setNewEdition(bookOne, 1984);
// bookUtils.setNewEdition(bookTwo, 1999);
// bookUtils.setLanguage(bookOne, "English");
// bookUtils.setLanguage(bookTwo, "French");
// console.log(bookOne, bookTwo);

// 6. add to the bookUtils object a setTranslation function, that
// receives a book a language and a translator, and sets a
// new property of translation, which is an object that
// contains the translator and the language.

// const bookUtils = {
//   getFirstPublished: function (bookA, bookB) {
//     return Number(bookA.year) < Number(bookB.year) ? bookA : bookB;
//   },
//   setNewEdition: function (book, newYear) {
//     book.latestEdition = newYear;
//   },
//   setLanguage: function (book, langVar) {
//     book.language = langVar;
//   },
//   setTranslation: function (book, tranlator, language) {
//     book.translation = { tranlator, language };
//   },
// };

// bookUtils.setNewEdition(bookOne, 1984);
// bookUtils.setNewEdition(bookTwo, 1999);
// bookUtils.setLanguage(bookOne, "English");
// bookUtils.setLanguage(bookTwo, "French");
// bookUtils.setTranslation(bookOne, "Avi Ron", "Hindu");
// bookUtils.setTranslation(bookTwo, "Eli Kopter", "Turkish");
// console.log(bookOne, bookTwo);

// 7. add to the bookUtils object a setPublisher function, that
// receives a book a name and location, and sets a new
// property named publisher, which is an object that containsthe name and location.

// const bookUtils = {
//   getFirstPublished: function (bookA, bookB) {
//     return Number(bookA.year) < Number(bookB.year) ? bookA : bookB;
//   },
//   setNewEdition: function (book, newYear) {
//     book.latestEdition = newYear;
//   },
//   setLanguage: function (book, langVar) {
//     book.language = langVar;
//   },
//   setTranslation: function (book, tranlator, language) {
//     book.translation = { tranlator, language };
//   },
//   setPublisher: function (book, publishName, location) {
//     book.publisher = { publishName, location };
//   },
// };

// bookUtils.setNewEdition(bookOne, 1984);
// bookUtils.setNewEdition(bookTwo, 1999);
// bookUtils.setLanguage(bookOne, "English");
// bookUtils.setLanguage(bookTwo, "French");
// bookUtils.setTranslation(bookOne, "Avi Ron", "Hindu");
// bookUtils.setTranslation(bookTwo, "Eli Kopter", "Turkish");
// bookUtils.setPublisher(bookOne, "Best Books LTD", "Bratislava");
// bookUtils.setPublisher(bookTwo, "Worst Books MFG", "Aphganistan");
// console.log(bookOne, bookTwo);

// 8. add to the bookUtils object a function isSamePublisher,
// which receives 2 books and checks if the publisher name
// and location are identical in the 2 books.

// const bookUtils = {
//   getFirstPublished: function (bookA, bookB) {
//     return Number(bookA.year) < Number(bookB.year) ? bookA : bookB;
//   },
//   setNewEdition: function (book, newYear) {
//     book.latestEdition = newYear;
//   },
//   setLanguage: function (book, langVar) {
//     book.language = langVar;
//   },
//   setTranslation: function (book, tranlator, language) {
//     book.translation = { tranlator, language };
//   },
//   setPublisher: function (book, publishName, location) {
//     book.publisher = { publishName, location };
//   },
//   isSamePublisher: function (bookA, bookB) {
//     return bookA.publisher === bookB.publisher &&
//       bookA.location === bookB.location
//       ? true
//       : false;
//   },
// };

// bookUtils.setNewEdition(bookOne, 1984);
// bookUtils.setNewEdition(bookTwo, 1999);
// bookUtils.setLanguage(bookOne, "English");
// bookUtils.setLanguage(bookTwo, "French");
// bookUtils.setTranslation(bookOne, "Avi Ron", "Hindu");
// bookUtils.setTranslation(bookTwo, "Eli Kopter", "Turkish");
// bookUtils.setPublisher(bookOne, "Best Books LTD", "Bratislava");
// bookUtils.setPublisher(bookTwo, "Worst Books MFG", "Aphganistan");
// console.log(bookOne, bookTwo);
// console.log("Same Publisher? ", bookUtils.isSamePublisher(bookOne, bookTwo));
