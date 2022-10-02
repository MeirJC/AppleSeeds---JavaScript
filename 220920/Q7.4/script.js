// You have this array:
// const fruits = ["Banana", "Orange", "Apple",
// "Mango"];
// using splice modify the array to be this:
// ["Banana", "Orange", "Lemon", "Kiwi", "Apple",
// "Mango"];

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(fruits.indexOf("Apple"),0,"Lemon","kiwi");

console.log(fruits)