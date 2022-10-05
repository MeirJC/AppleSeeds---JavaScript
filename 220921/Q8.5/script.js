// Instructions
// 1. Create a function that receives 1 argument, an object, and
// returns a new object with the properties and values
// swapped.

function swapProperties(obj) {
  const newObj = {};
  for (let prop in obj) {
    newObj[obj[prop]] = prop;
  }
  return newObj;
}

const exampleObj = {
  key1: "value 1",
  key2: "value 2",
  key3: "value 3",
  key4: "value 4",
  key5: "value 5",
};

const newObj = swapProperties(exampleObj);
console.log(newObj);
