// You have this array:
// const fruits = ["Banana", "Orange", "Lemon",
// "Apple", "Mango"];
// Use slice create a new array that will remove all the
// elements from the array except “Orange” and “Lemon”

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const slicedFruits = fruits.slice(fruits.indexOf("Orange"),fruits.indexOf("Lemon") +1);
console.log(slicedFruits);