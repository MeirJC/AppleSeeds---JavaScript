// inside the script tag do the following:
// Select all elements inside the body and store each element in a
// separate variable and print them to the console.
// 1. Select all elements not using the querySelector method.
// 2. Select all elements using querySelector method.
// 3. Select all inputs and iterate over them with the forEach
// method and print each one to the console. Using both
// querySelectorAll and getElementsByTagName.

const allElements = document.body.children;
console.log(allElements);

const allElementsQuery = document.body.querySelectorAll("*");
console.log(allElementsQuery);

document.body.querySelectorAll("input").forEach((n) => console.log(n));
