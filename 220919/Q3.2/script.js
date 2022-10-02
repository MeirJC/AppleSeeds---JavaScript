/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/
// From function declarations to explicit and implicit return functions (one of each).
// -------------------------------------------------------------
/*function welcome() {
let welcome = 'Welcome to Appleseeds Bootcamp!';
return welcome;
}*/
// -------------------------------------------------------------
// explicit
const welcomeExplicit = () => {
  return "Welcome to Appleseeds Bootcamp!";
};
// implicit
const welcomeImplicit = () => "Welcome to Appleseeds Bootcamp!";
// -------------------------------------------------------------
// -------------------------------------------------------------
/*function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}*/
// -------------------------------------------------------------
const powerExplicit = (a) => {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};
// -------------------------------------------------------------
const powerImplicit = (a) => Math.pow(a, 2);
// -------------------------------------------------------------
// -------------------------------------------------------------
// From function expressions to IIFE functions.
// -------------------------------------------------------------
/*const squareRoot = (a) => Math.sqrt(a);*/
// -------------------------------------------------------------
(function (a) {
  return Math.sqrt(a);
})(1764);
// 1746 (42 to the power of 2) is just to make the function
// recive an argument, and not to run into an error. since it
// calls and runs automaticly
// -------------------------------------------------------------
/*const randomNumbers = (a, b) => Math.random() * (a - b) + b;*/
// -------------------------------------------------------------
((a, b) => {
  Math.random() * (a - b) + b;
})(5, 7);
// 5,7 is just to make the function
// recive an argument, and not to run into an error. since it
// calls and runs automaticly
// -------------------------------------------------------------
