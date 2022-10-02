// Create a function that received an array of integers as a
// parameter.
// Return a new array without any duplicates inside. You
// indexOf as part of your solution.
// Example:
// [3,4,4,3,6,3] --→ [3,4,6]

function removeDuplicates(arr){
  let newArr=[];
  for (let i = 0; i<arr.length;i++) {
    if (newArr.indexOf(arr[i]) !== -1){
      continue;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(removeDuplicates([3,4,4,3,6,3]));