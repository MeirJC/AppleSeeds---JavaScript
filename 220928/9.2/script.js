// 1. Recreate the challenge from exercise 6.3-
// looping_with_arrays, but this time using a while loop.

// My 6.3 Exercise:
//-----------------------------------------------------------------
// Write a function that will receive an array of strings and will
// return a new array containing all the lengths of all the strings in
// the array it got as a parameter.
//     So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2].
//*****************************************************************
// const arrTextToLength = (arr) => {
//     let newArr = [];
//     for (let i = 0; i<arr.length;i++){
//         newArr[i]=arr[i].length;
//     }
//     return newArr;
// }
// let sampleArr =["boo", "doooo", "hoo","ro"];
// console.log(arrTextToLength(sampleArr));
//-----------------------------------------------------------------
const arrTextToLength = (arr) => {
    let newArr = [];
    let i = 0;
    while (i<arr.length){
        newArr[i]=arr[i].length;
        i++
    }
    return newArr;
}

let sampleArr =["boo", "doooo", "hoo","ro"];
console.log(arrTextToLength(sampleArr));

// 2. Reflect on what solution you like better for this task: the for
// loop or the while loop?
//-----------------------------------------------------------------
// I definitely love handling FOR loops much more. on the vast majority of times anything you can do with for loop
// you can do with while and vice versa... yet for feels like home :)
// I spent many hours with it when learning C, i love the index games... to think of how to manipulate them
// and the syntax is more organized to me... where increasing or decreasing the indexes is done as part of
// the loop declaration etc...
// dont get me wrong... While are cool too, but For... that's love :)