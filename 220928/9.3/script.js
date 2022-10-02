// Instructions
// You are given two arrays:
//     const food = ["Noodle", "Pasta", "Ice-cream",
//         "Meat", "Cucumber", "Olives"];
// const food1 = ["Fries", "Ice-cream", "Pizza",
//     "Olives", "Hamburgers"];
// Create a function that takes these two arrays as
// arguments.
//     Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.


const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];

const food1 = ["Fries", "Ice-cream", "Pizza",
    "Olives", "Hamburgers"];

const foodCompare = (arr1,arr2) =>{
    let commonArr = [];
    for (let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if (arr2[j] === arr1[i]){
                commonArr.push(arr2[j]);
            }
        }
    }
    return commonArr;
}
let arrFromFunc = foodCompare(food,food1);
console.log(arrFromFunc);