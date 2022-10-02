// 1. Fill an array with 100 of the same object using the array fill
// method.
const someObj = { firstName: "Meir", middleName: "Josef", lastName: "Cohen" };
const someArr = new Array(100).fill(someObj);
console.log(someArr.length);
// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
const range = Array.from({ length: 100 - 0 }, (_, i) => 0 + i + 1);
console.log(range);
// 3. Convert only values of an object into one array.
const rangeObj = { ...range };
console.log(rangeObj);
// 4. Convert an array into one object.
// 5. Find out if an array is an array.
// 6. Copy an array.
// ● Create a copy of an array that won’t affect the
// original array if modified.
// ● Create a copy of an array that will affect the original
// array if modified.
