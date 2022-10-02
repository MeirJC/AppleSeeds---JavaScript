// run in terminal: npm install prompt-sync
const prompt = require("prompt-sync")(); //line added to make the Node Module work.

let numSiblings = Number(prompt("How many siblings do you have? "));
console.log(`Number: ${numSiblings} Type:${typeof numSiblings}`)

if (numSiblings === 1){
    console.log("1 sibling!");
} else if (numSiblings > 1){
    console.log("More than 1 sibling!");
} else {
    console.log("No siblings");
}

// Answer to Questions 6 & 8
//
// When we use prompt (either in browser or the console)
// the input we get is of type String.
// I order to work with it as a regular number we need
// to perform casting of its type from String to a Number
//
// many ways to do it, such as: (parseInt(str)) / Number(str) / (Math.floor(str)) /
// just multiply the string by a Number like: str = (str * 1)