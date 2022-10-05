// The following exercise contains the following subjects:
// -Maps
// -Loops
// Instructions
// 1. Create 3 separate objects that their key is called name
// and their value is a string. Store them in separate
// variables.

const obj1 = {name:"Elik"};
const obj2 = {name:"Belik"};
const obj3 = {name:"Bom"};

// 2. Create a new Map object that sets each object as a key
// and assign an id number as the value.

let mapObj = new Map();
mapObj.set(obj1, 101).set(obj2, 102).set(obj3, 103);

// 3. Iterate over the Map object with the for..of loop.
// - log the name and id

for (let item of mapObj ){
  console.log(item);
}



