// Performance analysis
// One important practice is performance analysis. The
// JavaScript engines have made astounding strides in the
// performance of JavaScript, but that’s no excuse for writing
// sloppy and inefficient code.
// A good way to measure your performance is with console.time
//---------------------------------------------------------------------
// const maxCount = 1000000;
// console.time("My operation")// <---- Starts the timer
// for(let i =0; i < maxCount; i++){
// //Perform the operation to be measured multiple times
// }
// console.timeEnd("My operation") // <---- Stops the time
//---------------------------------------------------------------------
// Because a single operation of a given code happens much
// to quickly to measure reliably, we need to perform the code
// many times to get a measurable value. Usually we should
// perform the code tens of thousands of times, or even
// millions depending on the code being measured.
// Though the exact times can change depending on your
// system and version of Node.js you can get the general idea
// of how fast or slow your code is.
//---------------------------------------------------------------------
// Instructions
// Lets investigate who is performant, Maps or Objects!
// Setup:
// 1. Who can add key and value pairs faster in a for loop?
// • Create an empty Object and assign it to a variable.
// • Create a start timer for your object to be measured.
// • Create a for loop that will iterate a million times. Inside
// your for loop on each iteration create a new key, value
// pair to your object using the variable I.
// • Do the same procedure for a Map object.
// • Compare the times.
//   You may be surprised from the results :)

const maxCount = 1000000;
const obj = {}
console.time("My operation")// <---- Starts the timer
for(let i =0; i < maxCount; i++){
  obj[i] = i;
}
console.timeEnd("My operation") // <---- Stops the time

const objMap = new Map();
console.time("My Map operation")// <---- Starts the timer
for(let i =0; i < maxCount; i++){
objMap.set(i,i);
}
console.timeEnd("My Map operation") // <---- Stops the time

// With For Loop: My operation: 19.26318359375 ms --Obj was faster--
// With Map: My Map operation: 68.539306640625 ms

// 2. Who can find faster a specific property from itself?
//   Now that we populated 100000 properties to our
// object’s find the following:
// • Find out how long time would it take for the Object to
// find a specific property from itself.
// • Find out how long time would it take for the Map to find
// a specific property from itself.

console.time("My operation Obj Get")// <---- Starts the timer
console.log(obj[10]);
console.timeEnd("My operation Obj Get") // <---- Stops the time

console.time("My operation Map Get")// <---- Starts the timer
console.log(objMap.get(10));
console.timeEnd("My operation Map Get") // <---- Stops the time

// My operation Obj Get: 0.053955078125 ms
// My operation Map Get: 0.037109375 ms --Map was faster--


// 3. Who is faster in adding a single entry?

console.time("My operation Obj Set")// <---- Starts the timer
obj["pie"] = 3.14159;
console.timeEnd("My operation Obj Set") // <---- Stops the time


console.time("My operation Map Set")// <---- Starts the timer
objMap.set("pie",3.14159);
console.timeEnd("My operation Map Set") // <---- Stops the time


// My operation Obj Set: 0.008056640625 ms
// My operation Map Set: 0.001953125 ms --Map was faster--

//   4. Who is faster in deleting a single entry?

console.time("My operation Obj Delete")// <---- Starts the timer
delete obj["pie"]
console.timeEnd("My operation Obj Delete") // <---- Stops the time


console.time("My operation Map Delete")// <---- Starts the timer
objMap.delete("pie");
console.timeEnd("My operation Map Delete") // <---- Stops the time

//My operation Obj Delete: 0.007080078125 ms --Map was faster--
//My operation Map Delete: 0.001708984375 ms