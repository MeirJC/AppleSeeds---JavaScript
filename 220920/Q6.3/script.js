// Write a function that will receive an array of strings and will
// return a new array containing all the lengths of all the strings in
// the array it got as a parameter.
//     So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2].

const arrTextToLength = (arr) => {
    let newArr = [];
    for (let i = 0; i<arr.length;i++){
        newArr[i]=arr[i].length;
    }
    return newArr;
}

let sampleArr =["boo", "doooo", "hoo","ro"];
console.log(arrTextToLength(sampleArr));